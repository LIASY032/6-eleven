import axios from "axios";
import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../../constants";

export const createOrder = (user, address, dispatch) => {
  //create order
  axios.post("/orders");
  //delete the cart items in user account
};
export const clearOrder = (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = (dispatch) => {
  fetch("/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDERS, payload: data });
    });
};
