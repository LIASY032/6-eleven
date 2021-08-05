import { createSlice } from "@reduxjs/toolkit";
import { ORDERS } from "../constants";

const slice = createSlice({
  name: ORDERS,
  initialState: [],
  reducers: {
    orderAdded: (state, action) => {},
  },
});

export default slice.reducer;
export const { orderAdded } = slice.actions;
export const orderAddedType = orderAdded.type;
