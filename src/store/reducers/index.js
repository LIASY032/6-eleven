import { combineReducers } from "redux";
import { useReducer } from "./userReducer";
import { itemReducer } from "./itemReducer";

const reducer = combineReducers({ items: itemReducer, user: useReducer });
export default reducer;
