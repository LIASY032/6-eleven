import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import { itemReducer } from "./itemReducer";
import { modelControllerReducer } from "./modelControllerReducers";

const reducer = combineReducers({
  items: itemReducer,
  user: useReducer,
  modelController: modelControllerReducer,
});
export default reducer;
