const Joi = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: String,
  name: String,
  address: String,
  total: Number,
  cartItems: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
      title: String,
      price: Number,
      count: Number,
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

function validateItem(order) {
  const schema = Joi.object({
    email: Joi.string().required(),
    name: Joi.string(),
    address: Joi.string(),
    total: Joi.number(),
    //   cartItems: Joi.,
  });
  return schema.validate(order);
}

exports.Order = Order;
exports.orderSchema = orderSchema;
exports.validate = validateItem;
