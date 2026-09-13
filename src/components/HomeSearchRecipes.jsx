import { useEffect, useState } from "react"
import { getSearchRecipe } from "../services/api"

export default function SearchRecipe({recipe,setRecipes,recipes,filterCusine}){

    useEffect(()=>{
        async function getRecipesWithSearch() {
           if( recipe.trim()==""){
            return
           }
            let data=await getSearchRecipe(recipe)
setRecipes(data.recipes)
            
        }
        getRecipesWithSearch()
    },[recipe])
    
//     let filterData=recipes.filter((Item)=>Item.cuisine===filterCusine)

//     useEffect(()=>{
// },[filterCusine])
// filterData.length>0?setRecipes(filterData):"NO "+filterCusine+" Recipe Availble "


    return <div className="search-recipes">

    </div>
}