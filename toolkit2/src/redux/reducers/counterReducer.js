import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}


export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        addNumber:(state,{payload})=>{
            state.counter += payload
        }
    }
})

export const {addNumber} = counterSlice.actions;

export default counterSlice.reducer;