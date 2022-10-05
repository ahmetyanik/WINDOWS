import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:["Ahmet"]
}

export const isimlerSlice = createSlice({
    name:"isimler",
    initialState,
    reducers:{
        isimEkle:(state,{payload})=>{
            state.value = [...state.value,payload]
        },
        isimSil:(state,{payload})=>{
            state.value = state.value.filter(item=>item !== payload) 
        }
    }
})


export const {isimEkle, isimSil} = isimlerSlice.actions;


export default isimlerSlice.reducer;