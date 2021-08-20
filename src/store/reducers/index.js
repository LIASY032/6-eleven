import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import { itemReducer } from "./itemReducer";
import { orderReducers } from "./orderReducers";

const reducer = combineReducers({
  items: itemReducer,
  user: useReducer,
  order: orderReducers,
});
export default reducer;
