const config = require("config");

module.exports = function () {
  if (!config.get("sixelevenPrivateKey")) {
    throw new Error("FATAL ERROR: sixelevenPrivateKey is not defined.");
  }
};
