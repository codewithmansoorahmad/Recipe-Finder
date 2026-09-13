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
    
    // let filterData=recipes.filter((Item)=>Item.cuisine===filterCusine)
    //  filterData.length>0?setFilterRecipes(filterData):"No "+filterCusine+" recipe available"

//     useEffect(()=>{
// },[filterCusine])
// filterData.length>0?setRecipes(filterData):"NO "+filterCusine+" Recipe Availble "


    return <div className="search-recipes">

    </div>
}