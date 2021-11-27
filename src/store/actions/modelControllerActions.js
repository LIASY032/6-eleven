import {
  IS_LOGIN,
  IS_REGISTRATION,
  CLOSE_ALL_MODELS,
  ITEM_DETAILS,
} from "../../constants";

export const isLogin = (dispatch) => {
  dispatch({ type: IS_LOGIN });
};

export const isRegistration = (dispatch) => {
  dispatch({ type: IS_REGISTRATION });
};

export const openItemDetails = (item, dispatch) => {
  dispatch({ type: ITEM_DETAILS, payload: item });
};

export const closeAllModels = (dispatch) => {
  dispatch({ type: CLOSE_ALL_MODELS });
};
