import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["Something"],
  counter:0
};

console.log(initialState);


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state,  {payload} ) => {
      state.value = [...state.value, payload];
    },
    deleteToDo: (state, { payload }) => {
      state.value = state.value.filter((todo) => todo !== payload);
    },

    artir:(state,{payload})=>{
      state.counter += parseInt(payload) 
    }
  },
});

export const { addToDo, deleteToDo,artir } = todoSlice.actions;

export default todoSlice.reducer;
