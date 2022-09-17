const { authToken } = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");

const {
  generateRefreshToken,
  generateAccessToken,
} = require("../services/token");

const express = require("express");
const router = express.Router();

const confirmation = require("../services/emailConfirmation");
const { checkPending, userItemAddToDB } = require("../services/user");
const { OAuth2Client } = require("google-auth-library");

const config = require("config");
// TODO: remove client id
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
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password", "carts"]));

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

// user logins in
router.put("/login/:email", async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).send("User Not Found");

  if (!checkPending(user, res)) {
    bcrypt.compare(
      req.body.password,
      user.password,
      async function (error, result) {
        if (result) {
          // if the user login has shopping cart items
          userItemAddToDB(req.body.carts, user);
          // generate tokens
          const token = generateAccessToken(user.generateAuthTokenData());

          generateRefreshToken(user.generateAuthTokenData(), res);
          const result = _.pick(user, ["_id", "name", "email", "carts"]);
          result.token = token;
          res.send(result);
        } else {
          res.status(404).send("User Not Found");
        }
      }
    );
  }
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
    res.send(user);
  }
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

  //  Check the comfirmation code
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
  const { token, carts } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: config.get("google"),
  });
  const { name, email, picture } = ticket.getPayload();
  let user = await User.findOne({ email });
  // if the user is not existing in database
  if (!user) {
    user = new User({ name, email, password: "1234567890abcdef" });
  }
  // set active with google login
  user.status = "Active";
  await user.save();

  // add carts items

  userItemAddToDB(carts, user);
  const tokenUser = user.generateAuthTokenData();

  let returnCarts = [];
  if (user.carts) {
    returnCarts = user.carts;
  }

  // generate token
  generateRefreshToken(tokenUser, res);

  const access_token = generateAccessToken(tokenUser);
  const result = {
    name: name,
    email: email,
    picture: picture,
    token: access_token,
    carts: returnCarts,
  };
  res.status(201);
  res.send(result);
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
