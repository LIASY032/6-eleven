import { USER_LOGIN } from "../../constants";
import { signIn } from "../../services";

export const userLogin = async (email, password, carts, dispatch) => {
  const data = await signIn(email, password, carts);
  if (data !== undefined && data != null) {
    dispatch({
      type: USER_LOGIN,
      payload: data,
    });
  }
};
