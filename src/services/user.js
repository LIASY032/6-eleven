import axios from "axios";
import { convertCarts } from "./shoppingCart";

export async function signIn(email, password, carts = []) {
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/users/${email}`,
      {
        password,
        carts: convertCarts(carts),
      }
    );

    //need a fix for security
    // localStorage.setItem("x-auth-token", headers("x-auth-token"));
    alert("success");
    console.log(data);
    return data;
  } catch (ex) {
    console.log(ex);
  }
  //   try {
  //     const response = await axios.put(
  //       `/users/${email}`,
  //       {
  //         password,
  //         carts,

  //       },
  //       {
  //         //need a fix
  //         headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       }
  //     );

  //     const data = await response.data;

  //     console.log(data);
  //     return data;
  //   } catch (ex) {
  //     console.log(ex);
  //   }
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
