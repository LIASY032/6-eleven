const config = require("config");

module.exports = function () {
  if (!config.get("sixelevenPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
