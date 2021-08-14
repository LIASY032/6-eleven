import axios from "axios";
import { convertCarts } from "./shoppingCart";

export async function signIn(email, password, carts = []) {
  try {
    const { data } = await axios.put(`/users/${email}`, {
      password,
      carts: convertCarts(carts),
    });

    //need a fix for security
    // localStorage.setItem("x-auth-token", headers("x-auth-token"));
    alert("success");
    console.log(data);
    return data;
  } catch (ex) {
    console.log(ex);
  }
}

export async function userAddCartItem() {
  try {
  } catch (ex) {
    console.log(ex);
  }
}

export async function userShoppingCartItems() {
  try {
  } catch (ex) {
    console.log(ex);
  }
}
