const auth = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const confirmation = require("../service/emailConfirmation");
//for security reason
router.put("/me", async (req, res) => {
  const user = await User.findById(req.body._id).select("-password"); //don't want to show the password

  // console.log(req.cookies);
  res.send(user);
});

// user registers
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  // user = new User(_.pick(req.body, ["name", "email", "password", "carts"]));

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  const confirmationID = generateID();
  res.cookie(
    "x-user-registration",
    JSON.stringify({
      email: req.body.email,
      name: req.body.name,
      password: hashPassword,
      carts: req.body.carts,
      confirmationID: confirmationID,
    }),
    {
      secure: process.env.NODE_ENV !== "development",
      httpOnly: true,
      // expires: dayjs().add(30, "days").toDate(),
    }
  );

  confirmation(
    req.body.email,
    "Open this link to confirm the account http://localhost:5000/api/users/confirmation/" +
      confirmationID
  );
  res.send("Open Your Email");
  // user.password = await bcrypt.hash(user.password, salt);
  // await user.save();
  // const token = user.generateAuthToken();
  // res.cookie("x-auth-token", token, {
  //   secure: process.env.NODE_ENV !== "development",
  //   httpOnly: true,
  //   // expires: dayjs().add(30, "days").toDate(),
  // });
  // res.send(_.pick(user, ["name", "email", "carts"]));
});

// user logins in
router.put("/:email", async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });

  bcrypt.compare(
    req.body.password,
    user.password,
    async function (error, result) {
      if (result) {
        if (req.body.carts) {
          let newCarts = [];

          req.body.carts.forEach((item) => {
            let isExist = false;
            user.carts.forEach((userCartItem) => {
              if (item._id === userCartItem._id) {
                userCartItem.count = item.count + userCartItem.count;
                newCarts.push(userCartItem);
                isExist = true;
              }
            });
            if (!isExist) {
              newCarts.push(item);
            }
          });
          user.carts = newCarts;

          await user.save();
        }
        const token = user.generateAuthToken();
        res.cookie("x-auth-token", token, {
          secure: process.env.NODE_ENV !== "development",
          httpOnly: true,
          //   expires: dayjs().add(30, "days").toDate(),
        });

        res.send(_.pick(user, ["_id", "name", "email", "carts"]));
      } else {
        res.status(404).send("User Not Found");
      }
    }
  );
});

// user adds a shopping cart item
router.put("/addItem", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  const newItems = [];
  user.carts.forEach((item) => {
    if (item._id === req.body._id) {
      item.count += req.body.count;
    }
    newItems.push(item);
  });
  user.carts = newItems;
  await user.save();
  res.send("success");
});

router.get("/userInfo", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user.carts);
});

router.delete("/clearCartItem", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  user.carts = [];
  await user.save();
  //need to change the return message
  res.send("success");
});

router.get("/confirmation/:id", async (req, res) => {
  let confirmationUser = req.cookies["x-user-registration"];

  confirmationUser = JSON.parse(confirmationUser);

  if (confirmationUser.confirmationID !== req.params.id) {
    res.status(400).send("Invalid Confirmation ID");
  }

  const user = new User(
    _.pick(confirmationUser, ["name", "email", "password", "carts"])
  );

  // const salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateAuthToken();
  res.cookie("x-auth-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    //   expires: dayjs().add(30, "days").toDate(),
  });
  res.send(_.pick(user, ["name", "email", "carts"]));
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
