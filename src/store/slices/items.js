import { createSlice } from "@reduxjs/toolkit";
import { ITEMS } from "../constants";

const slice = createSlice({
  name: ITEMS,
  initialState: [],
  reducers: {
    fetchItems: (state, action) => {
      action.payload.forEach((element) => {
        state.push({ ...element, count: 1 });
      });
    },
  },
});

export const { fetchItems } = slice.actions;
export default slice.reducer;
export const fetchItemType = fetchItems.type;
