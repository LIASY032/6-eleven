const jwt = require("jsonwebtoken");
const config = require("config");

// default x-refresh-token is []
let refreshTokens = [];
const generateAccessToken = (user) => {
  const token = jwt.sign(
    user,
    config.get("accessTokenKey"),
    // TODO: modify the time
    { expiresIn: "5m" }
  );

  return token;
};

const generateRefreshToken = (user, res) => {
  const token = jwt.sign(
    user,
    config.get("refreshTokenKey"),
    // TODO: modify the time
    { expiresIn: "1d" }
  );
  refreshTokens.push(token);
  // TODO: find another place to store
  res.cookie("x-refresh-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });

  return token;
};

const deleteRefreshToken = (req, res) => {
  const refreshToken = req.cookies["x-refresh-token"];
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
};

const checkRefreshToken = function (req, res, next) {
  const refreshToken = req.cookies["x-refresh-token"];
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, config.get("refreshTokenKey"), (err, user) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      // TODO: change this
      req.user = user;
      next();
    }
  });
};

module.exports = {
  deleteRefreshToken,
  generateRefreshToken,
  checkRefreshToken,
  generateAccessToken,
};
