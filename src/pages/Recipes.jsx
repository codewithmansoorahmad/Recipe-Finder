import { useEffect, useState } from "react";
import RecipesHero from "../components/RecipesHero";
import { callApi } from "../services/api"
import RecipesData from "../components/RecipesData";
import "../css/Recipes.css"
import SearchRecipe from "../components/HomeSearchRecipes";

export default function Recipes(){
    const [recipes,setRecipes]=useState([])
    const [recipes2,setRecipes2]=useState([])
    const [filterRecipes,setFilterRecipes]=useState([])
    const [timeRecipes,setTimeRecipes]=useState([])
    const [difficuiltRecipes,SetDifficultRecipes]=useState([])
    const [filterCusine,setFilterCusine]=useState("")
    const [difficuilty,setDifficuilty]=useState("")
    const [cookTime,setCookTime]=useState("")
    const [err,setErr]=useState("")
const [recipe,setRecipe]=useState("")
    useEffect(()=>{
        async function getRecipes () {
            try{

            const data=await callApi(30)
            setRecipes(data.recipes) 
            setRecipes(data.recipes)
            }
                catch(error){
                    setErr(error.message)
                }
            
        }
getRecipes()
    },[])
    return <div className="recipes">

        <RecipesHero recipe={recipe} setRecipe={setRecipe} filterCusine={filterCusine} setFilterCusine={setFilterCusine} difficuilty={difficuilty} setDifficuilty={setDifficuilty} cookTime={cookTime} setCookTime={setCookTime}/>
                
        
        <RecipesData error={err} recipes={recipes} difficuiltRecipes={difficuiltRecipes} timeRecipes={timeRecipes} filterRecipes={filterRecipes} recipes2={recipes2} filterCusine={filterCusine} />
       < SearchRecipe filterCusine={filterCusine} recipes={recipes} setRecipes={setRecipes} recipe={recipe} setFilterRecipes={setFilterRecipes} SetDifficultRecipes={SetDifficultRecipes} setTimeRecipes={setTimeRecipes} cookTime={cookTime} difficuilty={difficuilty} />
        
    </div>
}