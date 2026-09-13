import { useEffect} from "react"
import { getSearchRecipe } from "../services/api"

export default function SearchRecipe({recipe,setRecipes,recipes,filterCusine,setFilterRecipes,SetDifficultRecipes ,setTimeRecipes, cookTime, difficuilty }){

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
   


    return <div className="search-recipes">

    </div>
}