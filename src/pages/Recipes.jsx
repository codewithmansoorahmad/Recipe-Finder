import {  lazy, Suspense, useState } from "react";
import RecipesHero from "../components/RecipesHero";
// import RecipesData from "../components/RecipesData";
import "../css/Recipes.css";
import LoadingPage from "../components/LoadingPage";
const RecipesData=lazy(()=>import("../components/RecipesData"))

export default function Recipes({recipes,setRecipes,err,setErr,results,setResults,recipe,setRecipe}) {
  const [filterCusine, setFilterCusine] = useState("All");
  const [difficuilty, setDifficuilty] = useState("All");
  const [cookTime, setCookTime] = useState("All");

const [searcErr,setSearchErr]=useState("")
  return (
    <div className="recipes">
      <RecipesHero
        recipe={recipe}
        setRecipe={setRecipe}
        filterCusine={filterCusine}
        setFilterCusine={setFilterCusine}
        difficuilty={difficuilty}
        setDifficuilty={setDifficuilty}
        cookTime={cookTime}
        setCookTime={setCookTime}
        setRecipes={setRecipes}
        setResults={setResults}
        err={err}
        setErr={setErr}
        searcErr={searcErr}
        recipes={recipes}
        results={results}
        setSearchErr={setSearchErr}
      />

<Suspense fallback={<LoadingPage/>}>
      <RecipesData
        recipes={recipes}
        results={results}
        setRecipes={setRecipes}
          err={err}
        setErr={setErr}
        recipe={recipe}
        setResults={setResults}
        filterCusine={filterCusine}
        difficuilty={difficuilty}
        cookTime={cookTime}
      />
      </Suspense>
    
    </div>
  );
}
