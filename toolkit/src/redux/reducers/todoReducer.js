import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  value: ["Something"],
  counter: 0,
  loading:false,
  posts:[]
};

export const getPosts = createAsyncThunk("todo/getPosts",async()=>{
 return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response=>response.json())
})


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, { payload }) => {
      state.value = [...state.value, payload];
    },
    deleteToDo: (state, { payload }) => {
      state.value = state.value.filter((todo) => todo !== payload);
    },

    artir: (state, { payload }) => {
      state.counter += parseInt(payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = [...payload];
      state.loading = false;
    },

    [getPosts.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { addToDo, deleteToDo, artir } = todoSlice.actions;

export default todoSlice.reducer;
