import { USER_LOGIN, USER_LOGOUT, USER_ADD_ITEM } from "../../constants";

export const useReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;

    case USER_LOGOUT:
      return {};
    case USER_ADD_ITEM:
      // TODO:
      const newState = state.slice();
      newState.carts = action.payload;
      return newState;
    default:
      return state;
  }
};
