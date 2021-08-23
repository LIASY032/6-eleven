import axios from "axios";

export async function createOrder(order) {
  axios.post("/orders");
}
