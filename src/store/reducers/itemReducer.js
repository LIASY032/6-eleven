import { FETCH_ITEMS } from "../../constants";
import {
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../../constants/types";

export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    // case FILTER_PRODUCTS_BY_SIZE:
    //   return {
    //     ...state,
    //     size: action.payload.size,
    //     filteredItems: action.payload.items,
    //   };
    // case ORDER_PRODUCTS_BY_PRICE:
    //   return {
    //     ...state,
    //     sort: action.payload.sort,
    //     filteredItems: action.payload.items,
    //   };
    case FETCH_ITEMS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
