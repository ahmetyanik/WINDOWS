import { configureStore } from "@reduxjs/toolkit";

import isimlerReducer from "./reducers/isimlerReducer";

export const store = configureStore({
    reducer:{
        isimler:isimlerReducer
    }
})