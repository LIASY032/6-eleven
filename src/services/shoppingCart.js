import axios from "axios";

export async function addToCart(item) {
  try {
    const response = await axios.post("orders", item);
    console.log(response);
  } catch (ex) {
    console.log(ex);
  }
}

export function convertCarts(carts) {
  const newCarts = carts.forEach((item) => {
    return {
      _id: item._id,
      title: item.title,
      price: item.price,
      count: item.count,
    };
  });
  return newCarts;
}
