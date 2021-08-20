import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../../constants";

export const orderReducers = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return { order: null };
    case FETCH_ORDERS:
      return { orders: action.payload };
    default:
      return state;
  }
};
