import { useEffect, useState } from "react"
import { getSearchRecipe } from "../services/api"

export default function SearchRecipe({recipe,setRecipes}){

    useEffect(()=>{
        async function getRecipesWithSearch() {
            let data=await getSearchRecipe(recipe)
console.log(data)
setRecipes(data.recipes)
            
        }
        getRecipesWithSearch()
    },[recipe])

    return <div className="search-recipes">

    </div>
}