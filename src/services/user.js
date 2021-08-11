import axios from "axios";

export async function signIn(email, password, carts = []) {
  try {
    const { data } = await axios.put(`/users/${email}`, {
      password,
      carts,
    });

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
