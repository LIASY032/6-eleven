function checkPending(user, res) {
  if (user.status === "Pending") {
    res.status(401).send("Your need to verify your email address");
    return true;
  }
  return false;
}

async function userItemAddToDB(carts, user) {
  if (carts) {
    const newCarts = [];

    carts.forEach((item) => {
      let isExist = false;
      user.carts.forEach((userCartItem) => {
        if (item._id === userCartItem._id) {
          userCartItem.count = item.count + userCartItem.count;
          newCarts.push(userCartItem);
          isExist = true;
        }
      });
      if (!isExist) {
        newCarts.push(item);
      }
    });
    user.carts = newCarts;

    await user.save();
  }
}

module.exports = { checkPending, userItemAddToDB };
