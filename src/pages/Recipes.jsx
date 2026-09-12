import { useEffect, useState } from "react";
import RecipesHero from "../components/RecipesHero";
import { callApi } from "../services/api"
import RecipesData from "../components/RecipesData";
import "../css/Recipes.css"

export default function Recipes(){
    const [recipes,setRecipes]=useState([])
    const [filterCusine,setFilterCusine]=useState("")
    const [difficuilty,setDifficuilty]=useState("")
    const [cookTime,setCookTime]=useState("")

    useEffect(()=>{
        async function getRecipes () {
            const data=await callApi(30)
            setRecipes(data.recipes) 
            
        }
getRecipes()
    },[])
    console.log(recipes)
    return <div className="recipes">
        <RecipesHero filterCusine={filterCusine} setFilterCusine={setFilterCusine} difficuilty={difficuilty} setDifficuilty={setDifficuilty} cookTime={cookTime} setCookTime={setCookTime}/>
        <RecipesData recipes={recipes}/>
    </div>
}