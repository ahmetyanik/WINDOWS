import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

export const store = configureStore({
    reducer:{
        todo:todoReducer,
        counter:counterReducer
    }
})