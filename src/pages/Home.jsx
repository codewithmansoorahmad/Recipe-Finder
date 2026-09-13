import { lazy, Suspense, useEffect, useState } from "react"
import Hero from "../components/Hero"

import "../css/Home.css"
import { callApi } from "../services/api"
import SearchRecipe from "../components/HomeSearchRecipes"
const PopularRecipes=lazy(()=>import("../components/PopularRecipes"))
export default function Home(){
    const [recipe,setRecipe]=useState("")
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
       async function getRecipes(){
let data=await callApi(6)
setRecipes(data.recipes)
        }
        getRecipes()

    },[])
    
    return <div className="home">
        <Hero recipe={recipe} setRecipe={setRecipe}/>

        <Suspense fallback={<h1>loading...</h1>}>
        <PopularRecipes recipes={recipes}/>

        </Suspense>

    </div>
}