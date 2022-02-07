function checkPending(user, res) {
  if (user.status === "Pending") {
    res.status(401).send("Your need to verify your email address");
    return true;
  }
  return false;
}

async function userItemAddToDB(carts, user, count) {
  const newCarts = [];

  // if carts is an array
  if (typeof carts === "object") {
    carts.forEach((item) => {
      let isExist = false;

      // check wether in user shopping carts
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
  } else {
    user.carts.forEach((item) => {
      // if the item in the shopping cart
      if (item._id === carts) {
        item.count += count;
      }
      newCarts.push(item);
    });
  }
  user.carts = newCarts;

  await user.save();
}

module.exports = { checkPending, userItemAddToDB };
