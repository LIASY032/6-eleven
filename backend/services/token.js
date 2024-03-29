const jwt = require("jsonwebtoken");
const config = require("config");

const generateAccessToken = (user) => {
  const token = jwt.sign(
    user,
    config.get("accessTokenKey"),
    // TODO: modify the time
    { expiresIn: "1d" }
  );

  return token;
};

const generateRefreshToken = (user, res) => {
  const token = jwt.sign(
    user,
    config.get("refreshTokenKey"),
    // TODO: modify the time
    { expiresIn: "7d" }
  );

  res.cookie("x-refresh-token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
  });

  return token;
};

const deleteRefreshToken = (req, res) => {
  res.clearCookie("x-refresh-token");
  res.status(204);
};

const checkRefreshToken = function (req, res, next) {
  const refreshToken = req.cookies["x-refresh-token"];
  if (refreshToken == null) return res.sendStatus(401);
  jwt.verify(refreshToken, config.get("refreshTokenKey"), (err, user) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      req.user = user;

      // regenerate the access token
      req.token = generateAccessToken(user);

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
