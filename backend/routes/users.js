const { authToken } = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const mapper = require("automapper-js");
const { UserCart } = require("../DTO/user");
const {
  generateRefreshToken,
  deleteRefreshToken,
} = require("../services/token");

const express = require("express");
const router = express.Router();

const confirmation = require("../services/emailConfirmation");
const { checkPending, userItemAddToDB } = require("../services/user");
const { OAuth2Client } = require("google-auth-library");

const config = require("config");
const { findItemsByUser } = require("../services/item");
const client = new OAuth2Client(config.get("google"));

//for security reason
router.put("/me", async (req, res) => {
  const user = await User.findById(req.body._id).select("-password"); //don't want to show the password
  if (!user) return res.status(404).send("User not found");

  // console.log(req.cookies);
  res.send(user);
});

// user registers
router.post("/", async (req, res) => {
  let cartsList = [];

  req.body.carts.forEach(function (item) {
    cartsList.push(mapper(UserCart, item));
    // cartsList.push(_.pick(req.body.carts, ["_id", "title", "price", "count"]));
  });
  req.body.carts = cartsList;
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password", "carts"]));
  user.addDevice(req.body.device);
  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
  user.confirmationCode = generateID();

  await user.save();

  // TODO: modify this in production level
  confirmation(
    req.body.email,
    `Open http://localhost:6000/api/users/confirmation/${user.confirmationCode}/${user._id}`
  );
  res.send("Open Your Email");
});

router.get("/newDevice/:code/:userId/:device", async (req, res) => {
  // TODO: modify this in production level
  const user = await User.findById(req.params.userId);

  if (user.confirmationCode == req.params.code) {
    user.addDevice(req.params.device);

    await user.save();
    return res.send("A new device added");
  }
  res.status(400).send("FAIL");
});

// user logins in
router.put("/login/:email", async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send("User Not Found");

  if (!user.checkDeviceExisting(req.body.device)) {
    // TODO: modify this in production level
    user.confirmationCode = generateID();
    await user.save();
    confirmation(
      user.email,
      `Open http://localhost:6000/api/users/newDevice/${user.confirmationCode}/${user._id}/${req.body.device}`
    );
    return res
      .status(404)
      .send(`A new device ${req.body.device} want to login your account`);
  }

  if (!checkPending(user, res)) {
    bcrypt.compare(
      req.body.password,
      user.password,
      async function (error, result) {
        if (result) {
          // if the user login has shopping cart items
          userItemAddToDB(req.body.carts, user);
          // generate tokens

          generateRefreshToken(
            user.generateAuthTokenData(req.body.device),
            res
          );
          const result = _.pick(user, ["_id", "name", "email", "carts"]);
          await findItemsByUser(result, function (item) {
            result.carts = item;

            res.send(result);
          });
        } else {
          res.status(404).send("Invalid Password");
        }
      }
    );
  }
});

router.get("/logout", function (req, res) {
  deleteRefreshToken(req, res);
  res.send("User logged out");
});

// user adds a shopping cart item
router.put("/addItem", authToken, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) return res.status(404).send("User Not Found");

  // if the user is pending, he cannot do anything;
  if (!checkPending(user, res)) {
    userItemAddToDB(req.body._id, user, req.body.count);
    res.send("success");
  }
});
// get the user information
router.put("/userInfo", authToken, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) return res.status(404).send("User Not Found");
  if (!checkPending(user, res)) {
    generateRefreshToken(user.generateAuthTokenData(req.user.device), res);
    res.send(user);
  }
  // regenerate refresh token
});
// clear the shopping cart item
router.delete("/clearCartItem", authToken, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  if (!user) return res.status(404).send("User Not Found");

  // if the user is pending, he cannot do anything
  if (!checkPending(user, res)) {
    user.carts = [];
    await user.save();
    //need to change the return message
    res.send("success");
  }
});
// confirm the user exist
router.get("/confirmation/:id/:userID", async (req, res) => {
  const user = await User.findById(req.params.userID);
  if (!user) return res.status(404).send("User not found");

  // if the user exist, user status change to active
  if (user.confirmationCode === req.params.id) {
    user.status = "Active";
    await user.save();

    res.send(_.pick(user, ["_id", "name", "email", "carts"]));
  } else {
    res.status(400).send("Your confirmation code is invalid");
  }
});

// forgot password
router.put("/forgot", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send("User not found");
  }

  // generate confirmation code to user account
  user.changePasswordCode = generateID();

  await user.save();

  // send an email to user
  confirmation(
    req.body.email,
    `Your code is ${user.changePasswordCode}. `,
    "Your user information"
  );
  res.send("Open your email to get your code");
});
// solving user change the new password
router.put("/forgot/:codeID", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("User not found");

  //  Check the confirmation code
  if (user.changePasswordCode === req.params.codeID) {
    // clean change password code in attempt to prevent change the password with same comfirmation ID
    user.changePasswordCode = "";

    // renew the password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();
    return res.send("Your password has been changed");
  }
  res.status(400).send("Invalid confirmation code");
});

//google login
router.post("/auth/google", async (req, res) => {
  const { token, carts, device } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.get("google"),
  });
  const { name, email, picture } = ticket.getPayload();
  let user = await User.findOne({ email });
  // if the user is not existing in database
  if (!user) {
    user = new User({ name, email, password: "1234567890abcdef" });
    user.addDevice(device);
  }
  // set active with google login
  user.status = "Active";

  await user.save();

  // add carts items

  userItemAddToDB(carts, user);

  const tokenUser = user.generateAuthTokenData(device);

  let returnCarts = [];
  if (user.carts) {
    returnCarts = user.carts;
  }

  // generate token
  generateRefreshToken(tokenUser, res);

  const result = {
    name: name,
    email: email,
    picture: picture,
    carts: returnCarts,
  };

  await findItemsByUser(result, function (item) {
    result.carts = item;

    res.status(201);
    res.send(result);
  });
});

//Generate Confirmation ID
function generateID() {
  var key = {
    i: "w",
    l: "x",
    o: "y",
    u: "z",
  };
  var randomInt = Math.floor(Math.random() * 1e9);
  console.log(
    randomInt.toString(32).replace(/[ilou]/, function (a) {
      return key[a];
    })
  );
  return randomInt.toString(32).replace(/[ilou]/, function (a) {
    return key[a];
  });
}

module.exports = router;
