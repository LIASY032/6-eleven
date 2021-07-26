const express = require("express");
const items = require("../routes/items");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/items", items);
};
