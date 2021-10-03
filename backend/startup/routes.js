const express = require("express");
const items = require("../routes/items");
const users = require("../routes/users");
const orders = require("../routes/orders");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/items", items);
  app.use("/api/users", users);
  app.use("/api/orders", orders);
  app.use(error);
};
