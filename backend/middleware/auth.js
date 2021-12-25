const jwt = require("jsonwebtoken");
const config = require("config");
const {
  refreshTokens,
  generateAccessToken,
  generateRefreshToken,
} = require("../services/token");

function auth(req, res, next) {
  const token = req.cookies["x-auth-token"];

  if (!token) return res.status(401).send("Access denied.");
  try {
    const decoded = jwt.verify(token, config.get("sixelevenPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

// access and refresh tokens
function authToken(req, res, next) {
  const refreshToken = req.cookies["x-refresh-token"];
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, config.get("refreshTokenKey"), (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    generateAccessToken(user, res);
    next();
  });
}

module.exports = { auth, authToken };
