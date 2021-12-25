const jwt = require("jsonwebtoken");
const config = require("config");

// default x-refresh-token is []
let refreshTokens = [];

const generateAccessToken = (user, res) => {
  const token = jwt.sign(
    user,
    config.get("accessTokenKey"),
    // TODO: modify the time
    { expiresIn: "300s" }
  );
  res.cookie("x-access-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });
};

const generateRefreshToken = (user, res) => {
  const token = jwt.sign(
    user,
    config.get("refreshTokenKey"),
    // TODO: modify the time
    { expiresIn: "3600s" }
  );
  // TODO: find another place to store
  res.cookie("x-refresh-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });
  refreshTokens.push(token);
};

const deleteRefreshToken = (req, res, token) => {
  const refreshToken = req.cookies["x-refresh-token"];
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
};

module.exports = {
  refreshTokens,
  deleteRefreshToken,
  generateRefreshToken,
  generateAccessToken,
};
