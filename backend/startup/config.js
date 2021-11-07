const config = require("config");

module.exports = function () {
  if (!config.get("sixelevenPrivateKey")) {
    throw new Error("FATAL ERROR: sixelevenPrivateKey is not defined.");
  }
  if (!config.get("db")) {
    throw new Error("FATAL ERROR: db is not defined.");
  }
  if (!config.get("emailAuth")) {
    throw new Error("FATAL ERROR: emailAuth is not defined.");
  } else {
    if (!config.get("emailAuth").email) {
      throw new Error("FATAL ERROR: email is not defined in emailAuth.");
    }
    if (!config.get("emailAuth").password) {
      throw new Error("FATAL ERROR: password is not defined in emailAuth.");
    }
  }
};
