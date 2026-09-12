import { useEffect, useState } from "react";
import RecipesHero from "../components/RecipesHero";
import { callApi } from "../services/api"


export default function Recipes(){
    const [recipes,setRecipes]=useState([])
    const [filterCusine,setFilterCusine]=useState("")
    const [difficuilty,setDifficuilty]=useState("")
    const [cookTime,setCookTime]=useState("")

    useEffect(()=>{
        async function getRecipes () {
            const data=await callApi(30)
            setRecipes(data.recipes)
            return data.recipes
            
        }
getRecipes()
    },[])
    return <div className="recipes">
        <RecipesHero filterCusine={filterCusine} setFilterCusine={setFilterCusine} difficuilty={difficuilty} setDifficuilty={setDifficuilty} cookTime={cookTime} setCookTime={setCookTime}/>
        <h1>recipes</h1>
    </div>
}