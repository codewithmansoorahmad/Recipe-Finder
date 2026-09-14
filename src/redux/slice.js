// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { callApi } from "../services/api";

// const getRecipes=createAsyncThunk("recipes",async()=>{
//     const data=await callApi(30)
//     return data.recipes

// })

// const recipes=createSlice({
//     name:"recipesData",
//     initialState:{
//         recipes:[],
//         error:"",


//     },

//     extraReducers:(builder)=>{
//         builder.addCase(getRecipes.fulfilled,(state)=>{
//             state.recipes=getRecipes()
//         })
//     }
// })

// // export default recipes.reducer