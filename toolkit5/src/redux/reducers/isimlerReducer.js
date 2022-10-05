import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isimler: ["Ahmet"],
  sayilar: [1, 2, 3],
};

export const isimlerSlice = createSlice({
  name: "isimler",
  initialState,
  reducers: {
    isimEkle: (state, { payload }) => {
      state.isimler = [...state.isimler, payload];
    },
  },
});

export const sayilarSlice = createSlice({
  name: "sayilar",
  initialState,
  reducers: {
    sayiEkle: (state, { payload }) => {
      state.sayilar = [...state.sayilar, payload];
    },
  },
});

export const { isimEkle } = isimlerSlice.actions;
export const { sayiEkle } = sayilarSlice.actions;

export default isimlerSlice.reducer;
