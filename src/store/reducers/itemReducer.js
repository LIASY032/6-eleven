import { FETCH_ITEMS } from "../../constants";

export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
