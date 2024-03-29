import axios from "axios";
import { convertCarts } from "./shoppingCart";
import { exceptionHandler, deviceString } from ".";
export async function signIn(email, password, carts = []) {
  return await exceptionHandler(
    async function () {
      const { data } = await axios.put(`/users/login/${email}`, {
        password,
        carts: convertCarts(carts),
        device: deviceString,
      });

      alert(`${data.name} login successfully `);

      return data;
    },
    function (error) {
      if (error.response.status === 401) {
        alert(error.response.data);
      } else {
        alert(error.response.message);
      }
    }
  );
}

export async function register(name, email, password, carts = []) {
  return await exceptionHandler(async () => {
    const { data } = await axios.post(`/users`, {
      name,
      email,
      password,
      carts,
      device: deviceString,
    });
    return data;
  });
}

export async function userAddCartItem() {
  try {
  } catch (ex) {
    console.log(ex);
  }
}

export async function userInfo() {
  return await exceptionHandler(
    async function () {
      //need to add a token header
      const { data } = await axios.put(`/users/userInfo`, {
        device: deviceString,
      });
      return data;
    },
    function (error) {
      if (error.response.status === 401) {
        alert(error.response.data);
      } else {
        alert(error.response.message);
      }
    }
  );
}

export async function userLogout() {
  const { data } = await axios.get(`/users/logout/`);
  return data;
}
export const googleSignIn = async (tokenId, carts) => {
  return await exceptionHandler(async () => {
    const { data } = await axios({
      method: "post",
      url: `/users/auth/google`,
      withCredentials: true,
      data: { token: tokenId, carts, device: deviceString },
    });
    console.log(data);

    alert(`${data.name} login successfully `);
    return data;
  });
};

// export const testToken = () => {
//   axios.get("/users/auth/test");
// };
