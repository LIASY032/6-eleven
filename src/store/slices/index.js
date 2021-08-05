import { combineReducers } from "redux";
import carts from "./carts";
import items from "./items";

export * from "./carts";
export * from "./items";

const reducer = combineReducers({
  carts: carts,
  items: items,
});
export default reducer;
