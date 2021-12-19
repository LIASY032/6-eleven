const jwt = require("jsonwebtoken");
const config = require("config");
const localStorage = require("localStorage");

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
  const refreshToken = req.body.token;

  // TODO: refresh token
  const refreshTokens = JSON.parse(localStorage.getItem("x-refresh-token"));
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, config.get("sixelevenPrivateKey"), (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
}

module.exports = auth;
