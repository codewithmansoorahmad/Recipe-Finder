import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipes=createSlice({
    name:"favorites",
    initialState:{
        favorites:JSON.parse(localStorage.getItem("favorites"))||[]
        
    },
    reducers:{
        addFavorites:(state,action)=>{
            state.favorites.push(action.payload)
            localStorage.setItem("favorites",JSON.stringify(state.favorites))
        }
    }
})