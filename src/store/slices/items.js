import { createSlice } from "@reduxjs/toolkit";
import { ITEMS } from "../constants";

const slice = createSlice({
  name: ITEMS,
  initialState: [],
  reducers: {
    fetchItems() {},
  },
});
