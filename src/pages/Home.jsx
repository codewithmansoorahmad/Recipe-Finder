import { lazy, Suspense } from "react"
import Hero from "../components/Hero"

import "../css/Home.css"
const PopularRecipes=lazy(()=>import("../components/PopularRecipes"))
export default function Home({setRecipe,setResults,popularRecipes}){
   
    return <div className="home">
        <Hero  />

      { popularRecipes.length>0 && <Suspense fallback={<h1>loading...</h1>}>
        <PopularRecipes popularRecipes={popularRecipes}  setRecipe={setRecipe} setResults={setResults}/>

        </Suspense>}

    </div>
}