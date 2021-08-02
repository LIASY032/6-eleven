import { createSlice } from "@reduxjs/toolkit";
import { CARTS } from "../constants";

const slice = createSlice({
  name: CARTS,
  initialState: [],
  reducers: {
    cartItemAdded: (items, action) => {
      items.push(action.payload);
    },
    cartItemDeleted: (items, action) => {
      items.filter((item) => item._id !== action.payload._id);
    },
  },
});

export default slice.reducer;
