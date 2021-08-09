import { combineReducers } from "redux";
import { itemReducer } from "./itemReducer";

const reducer = combineReducers({ items: itemReducer });
export default reducer;
