import { createSlice } from "@reduxjs/toolkit";
import { ORDERS } from "../constants";

const slice = createSlice({
  name: ORDERS,
  initialState: [],
  reducers: {
    orderAdded: (state, action) => {
      let isExist = false;
      const index = state.findIndex((order) => {
        isExist = true;
        return order === action.payload._id;
      });
      if (!isExist) {
        state.push(action.payload);
      } else {
        state[index] = action.payload;
      }
    },
    clearOrder: (state, action) => {
      state = [];
    },
    removeOrder: (state, action) => {
      state.filter((order) => order._id !== action.payload._id);
    },
  },
});

export default slice.reducer;
export const { orderAdded, clearOrder, removeOrder } = slice.actions;
