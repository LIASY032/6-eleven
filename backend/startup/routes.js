const express = require("express");
const items = require("../routes/items");
const users = require("../routes/users");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/items", items);
  app.use("/api/users", users);
};
