import { USER_LOGIN, USER_LOGIN_ERROR } from "../../constants";
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
      type: USER_LOGIN_ERROR,
      payload: data,
    });
  }
};
