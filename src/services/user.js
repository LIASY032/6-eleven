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

    return data;
  } catch (ex) {
    console.log(ex);
  }
}

export async function register(name, email, password, carts = []) {
  try {
    const { data } = await axios.post(`/users`, {
      name,
      email,
      password,
      carts,
    });
    return data;
  } catch (ex) {
    console.log("====================================");
    console.log(ex);
    console.log("====================================");
  }
}

export async function userAddCartItem() {
  try {
  } catch (ex) {
    console.log(ex);
  }
}

export async function userInfo() {
  try {
    //need to add a token header
    const { data } = await axios.get(`/users/userInfo`);
    return data;
  } catch (ex) {
    console.log(ex);
  }
}
