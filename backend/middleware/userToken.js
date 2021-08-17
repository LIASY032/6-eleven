let userToken;

module.exports = function (req, res, next) {
  if (!userToken) {
    userToken = req.header("x-auth-token");
  } else {
  }
  res.cookie("x-auth-token", userToken, {
    //   secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    //   expires: dayjs().add(30, "days").toDate(),
  });
  res.send(req.body);

  next();
};
