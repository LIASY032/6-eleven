function check(user, res) {
  if (user.status === "Pending") {
    res.status(401).send("Your need to verify your email address");
    return true;
  }
  return false;
}

module.exports = check;
