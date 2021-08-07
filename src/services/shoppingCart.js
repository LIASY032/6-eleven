import axios from "axios";

export async function addToCart(item) {
  try {
    const response = await axios.post("/orders", item);
  } catch (ex) {
    console.log(ex);
  }
}
