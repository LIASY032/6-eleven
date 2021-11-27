import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import { itemReducer } from "./itemReducer";
import { orderReducers } from "./orderReducers";
import { modelControllerReducer } from "./modelControllerReducers";

const reducer = combineReducers({
  items: itemReducer,
  user: useReducer,
  order: orderReducers,
  modelController: modelControllerReducer,
});
export default reducer;
