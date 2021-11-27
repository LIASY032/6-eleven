import {
  IS_LOGIN,
  IS_REGISTRATION,
  CLOSE_ALL_MODELS,
  ITEM_DETAILS,
} from "../../constants";

export const modelControllerReducer = (
  state = {
    isLogin: false,
    isRegistration: false,
    itemDetails: { isShow: false, item: null },
  },
  action
) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        isLogin: true,
        isRegistration: false,
        itemDetails: { isShow: false, item: null },
      };
    case IS_REGISTRATION:
      return {
        isLogin: false,
        isRegistration: true,
        itemDetails: { isShow: false, item: null },
      };
    case ITEM_DETAILS:
      return {
        isLogin: false,
        isRegistration: false,
        itemDetails: { isShow: true, item: action.payload },
      };

    case CLOSE_ALL_MODELS:
      return {
        isLogin: false,
        isRegistration: false,
        itemDetails: { isShow: false, item: null },
      };
    default:
      return state;
  }
};
