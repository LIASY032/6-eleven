import { actionExceptionHandler } from ".";
import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_DOES_NOT_HAVE_TOKEN,
  USER_LOGOUT,
  USER_ADD_ITEM,
  GOOGLE_LOGIN_ERROR,
} from "../../constants";
import { googleSignIn, signIn, userInfo } from "../../services";

export const userLogin = async (
  email,
  password,
  carts,
  dispatch,
  importCartData
) => {
  const data = await signIn(email, password, carts);

  actionExceptionHandler(
    data,
    USER_LOGIN,
    USER_LOGIN_ERROR,
    dispatch,
    function (data) {
      importCartData(data.carts);

      localStorage.setItem("token", data.token);
    }
  );
};

export const getUserInfo = async (dispatch) => {
  const data = await userInfo();

  actionExceptionHandler(data, USER_LOGIN, USER_DOES_NOT_HAVE_TOKEN, dispatch);
};

export const logOut = (dispatch) => {
  localStorage.setItem("token", "");
  dispatch({
    type: USER_LOGOUT,
  });
};

// TODO: delete item, update item
export const userAddItem = (item, dispatch) => {
  dispatch({
    type: USER_ADD_ITEM,
    payload: item,
  });
};

// Google login

export const googleLogin = async (tokenId, carts, dispatch, importCartData) => {
  const data = await googleSignIn(tokenId, carts);

  actionExceptionHandler(
    data,
    USER_LOGIN,
    GOOGLE_LOGIN_ERROR,
    dispatch,
    function (data) {
      importCartData(data.carts);

      localStorage.setItem("token", data.token);
    }
  );
};
