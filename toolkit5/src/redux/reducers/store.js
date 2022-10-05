import { configureStore } from "@reduxjs/toolkit";
import isimlerReducer from "./isimlerReducer";



export const store = configureStore({
  reducer: {
    isimler: isimlerReducer,
    sayilar: isimlerReducer
  },
});



