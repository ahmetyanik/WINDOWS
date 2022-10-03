import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value:["Baslangic"],
    loading:false,
    posts:[]
}

export const getPosts = createAsyncThunk("todo/getPosts", async()=>{
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json());
})



export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToDo:(state,{payload})=>{
            state.value = [...state.value,payload];
        },
        deleteToDo:(state,{payload})=>{
            state.value = state.value.filter((todo)=>todo !== payload)
        }
    },
    extraReducers:{
        [getPosts.pending] : (state)=>{
            state.loading = true;
        },

        [getPosts.fulfilled] : (state, {payload}) =>{
            state.posts = [...payload];
            state.loading = false
        },

        [getPosts.rejected] : (state,{payload})=>{
            state.loading = false;
        }
    }

})

export const {addToDo,deleteToDo} = todoSlice.actions;

export default todoSlice.reducer;