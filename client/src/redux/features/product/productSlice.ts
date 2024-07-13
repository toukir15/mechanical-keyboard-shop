import { createSlice } from "@reduxjs/toolkit";
export interface productState {
  value: number;
}

const initialState: productState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});
