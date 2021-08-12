import axios from "axios";

export async function addToCart(item) {
  try {
    const response = await axios.post("orders", item);
    console.log(response);
  } catch (ex) {
    console.log(ex);
  }
}
