const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

// const { itemSchema } = require("./item");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: { type: Boolean, required: true, default: false },
  carts: {
    type: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
    require: false,
    default: [],
  },
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Pending",
  },
  confirmationCode: String,
  changePasswordCode: String, //need to change
});

//the methods must places on model head
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("sixelevenPrivateKey"),
    // TODO: modify the time
    { expiresIn: "300s" }
  );

  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),

    email: Joi.string().min(5).max(255).required().email(), //add email() check it is a valided email
    password: Joi.string().min(5).max(255).required(),
    carts: Joi.array()
      .items(
        Joi.object({
          _id: Joi.string(),
          title: Joi.string(),
          price: Joi.number(),
          count: Joi.number(),
        })
      )
      .optional(),
  });

  return schema.validate(user);
}

function validateCartItems(cartItems) {
  const schema = Joi.array()
    .items(
      Joi.object({
        _id: Joi.string(),
        title: Joi.string(),
        price: Joi.number(),
        count: Joi.number(),
      })
    )
    .optional();
  return schema.validate(cartItems);
}

exports.User = User;
exports.validate = validateUser;
exports.validateCartItems = validateCartItems;
