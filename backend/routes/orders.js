const { Order, validate } = require("../models/order");
const express = require("express");
const { Item } = require("../models/item");
const router = express.Router();
const _ = require("lodash");

router.get("/", async (req, res) => {
  const orders = await Order.find().sort("name");
  res.send(orders);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  req.body.cartItems.forEach(async (cartItem) => {
    const item = await Item.findById(cartItem._id);
    if (!item) return res.status(400).send("Invalid item.");
  });

  let order = new Order(
    _.pick(req.body, ["email", "name", "address", "total", "cartItems"])
  );
  order = await order.save();
  res.send(order);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const order = await Order.findByIdAndUpdate(
    req.params._id,
    _.pick(req.body, ["email", "name", "address", "total", "cartItems"]),
    { new: true }
  );

  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

router.delete("/:id", async (req, res) => {
  const order = await Order.findByIdAndRemove(req.params.id);

  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return res.status(404).send("The order with the given ID was not found.");

  res.send(order);
});

module.exports = router;
