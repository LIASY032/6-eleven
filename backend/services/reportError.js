const winston = require("winston");

function reportError(message, error) {
  winston.error(message, error);
}

module.exports = reportError;
