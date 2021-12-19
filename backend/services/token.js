const jwt = require("jsonwebtoken");
const config = require("config");
const localStorage = require("localStorage");
// default x-refresh-token is []
localStorage.setItem("x-refresh-token", JSON.stringify([]));
const generateAccessToken = (user, res) => {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
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
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("refreshTokenKey"),
    // TODO: modify the time
    { expiresIn: "3600s" }
  );

  // TODO: find another place to store
  localStorage.setItem("x-refresh-token", token);
};

const deleteRefreshToken = (req, res) => {
  const token = req.cookies["x-auth-token"];
  refreshTokens = refreshTokens.filter((token1) => token1 !== token);
  res.sendStatus(204);
};
