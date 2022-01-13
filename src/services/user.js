import axios from "axios";
import { convertCarts } from "./shoppingCart";

export async function signIn(email, password, carts = []) {
  try {
    const { data } = await axios.put(`/users/login/${email}`, {
      password,
      carts: convertCarts(carts),
    });

    alert(`${data.name} login successfully `);

    return data;

    //need a fix for security
    // localStorage.setItem("x-auth-token", headers("x-auth-token"));
  } catch (ex) {
    if (ex.response.status === 401) {
      alert(ex.response.data);
    } else {
      alert(ex.response.message);
    }
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
    if (ex.response.status === 401) {
      console.log(ex.response.data);
    } else {
      console.log(ex.response);
    }
  }
}
export const googleSignIn = (tokenId) => {
  return axios({
    method: "post",
    url: `/users/auth/google`,
    withCredentials: true,
    data: { token: tokenId },
  });
};

export const testToken = () => {
  axios.get("/users/auth/test");
};
