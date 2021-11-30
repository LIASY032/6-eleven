import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_DOES_NOT_HAVE_TOKEN,
  USER_LOGOUT,
  USER_ADD_ITEM,
} from "../../constants";
import { signIn, userInfo } from "../../services";

export const userLogin = async (email, password, carts, dispatch) => {
  const data = await signIn(email, password, carts);

  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: USER_LOGIN,
      payload: data,
    });
  } else {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: data,
    });
  }
};

export const getUserInfo = async (dispatch) => {
  const data = await userInfo();
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: USER_LOGIN,
      payload: data,
    });
  } else {
    dispatch({
      type: USER_DOES_NOT_HAVE_TOKEN,
      payload: data,
    });
  }
};

export const logOut = (dispatch) => {
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
