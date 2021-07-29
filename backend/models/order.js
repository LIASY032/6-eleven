const { number } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

function validateItem(order) {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    name: Joi.string(),
    address: Joi.string(),
    total: Joi.number(),
    cartItems: Joi.array().items(
      Joi.object({
        _id: Joi.string(),
        title: Joi.string(),
        price: Joi.number(),
        count: Joi.number(),
      })
    ),
  });

  return schema.validate(order);
}

exports.Order = Order;
exports.orderSchema = orderSchema;
exports.validate = validateItem;
