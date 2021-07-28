const { Order, validate } = require("../models/order");
const express = require("express");
const { Item } = require("../models/item");
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find().sort("name");
  res.send(orders);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const item = await Item.findById(req.body.cartItems);
});
