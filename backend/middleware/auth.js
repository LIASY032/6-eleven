const jwt = require("jsonwebtoken");
const config = require("config");
const {
  checkRefreshToken,
  generateRefreshToken,
} = require("../services/token");

// function auth(req, res, next) {
//   const token = req.cookies["x-auth-token"];

//   if (!token) return res.status(401).send("Access denied.");
//   try {
//     const decoded = jwt.verify(token, config.get("sixelevenPrivateKey"));
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).send("Invalid token.");
//   }
// }
function authToken(req, res, next) {
  const token = req.cookies["x-refresh-token"];

  const device = req.body.device;

  if (!token || !device) return res.status(401).send("Access denied.");
  try {
    const decoded = jwt.verify(token, config.get("refreshTokenKey"));

    if (device != decoded.device) {
      return res.status(401).send("Not original Device.");
    }
    req.user = decoded;

    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
// access and refresh tokens
// function authToken(req, res, next) {
//   let token = req.body.token;
//   if (!token) {
//     return res.status(401).send("Access denied.");
//   }

//   try {
//     const decoded = jwt.verify(token, config.get("accessTokenKey"));

//     req.user = decoded;

//     next();
//   } catch (ex) {
//     try {
//       // check the refresh token
//       checkRefreshToken(req, res, next);
//     } catch (ex) {
//       console.log("Invalid token.");
//       res.status(403).send("Invalid token.");
//     }
//   }
// }

module.exports = { authToken };
