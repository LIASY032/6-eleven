import { USER_LOGIN } from "../constants";

export const userLogin = (email, password, dispatch) => {
  dispatch({
    type: USER_LOGIN,
  });
};
