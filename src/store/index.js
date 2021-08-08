// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import reducer from "./reducers";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, {}, composeEnhancer(applyMiddleware(thunk)));
// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
