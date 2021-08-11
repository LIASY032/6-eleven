import { USER_LOGIN } from "../../constants";

export const userLogin = async (email, password, dispatch) => {
  dispatch({
    type: USER_LOGIN,
  });
};
