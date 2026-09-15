import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipesSlice=createSlice({
    name:"favorites",
    initialState:{
        favoritesRecipes:JSON.parse(localStorage.getItem("favorites"))||[]
        
    },
    reducers:{
        addFavorites:(state,action)=>{
            state.favoritesRecipes.push(action.payload)
            localStorage.setItem("favorites",JSON.stringify(state.favoritesRecipes))
        },
        removeFavorite:(state,action)=>{
            state.favoritesRecipes= state.favoritesRecipes.filter((item)=>item.id!==action.payload  )
            localStorage.setItem("favorites",JSON.stringify(state.favoritesRecipes))


        }
    }
})
export const {addFavorites,removeFavorite}=favoriteRecipesSlice.actions
export default favoriteRecipesSlice.reducer