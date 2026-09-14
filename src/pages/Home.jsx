import { lazy, Suspense, useEffect, useState } from "react"
import Hero from "../components/Hero"

import "../css/Home.css"
import { callApi } from "../services/api"
import SearchRecipe from "../components/HomeSearchRecipes"
const PopularRecipes=lazy(()=>import("../components/PopularRecipes"))
export default function Home({setRecipe,setResults,popularRecipes}){
   
    return <div className="home">
        <Hero  />

        <Suspense fallback={<h1>loading...</h1>}>
        <PopularRecipes popularRecipes={popularRecipes}  setRecipe={setRecipe} setResults={setResults}/>

        </Suspense>

    </div>
}