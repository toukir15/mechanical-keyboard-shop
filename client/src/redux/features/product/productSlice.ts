import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
