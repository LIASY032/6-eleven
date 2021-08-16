const auth = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//for security reason
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password"); //don't want to show the password

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
  await user.save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email", "carts"]));
});

// user logins in
router.put("/:email", async (req, res) => {
  // console.log("dddddddddd");
  const email = req.params.email;
  const user = await User.findOne({ email });

  bcrypt.compare(
    req.body.password,
    user.password,
    async function (error, result) {
      if (result) {
        if (req.body.carts) {
          console.log(req.body.carts);
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
          console.log(user.carts);
          await user.save();
        }
        const token = user.generateAuthToken();
        res
          .header("x-auth-token", token)
          .send(_.pick(user, ["_id", "name", "email", "carts"]));
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

module.exports = router;
