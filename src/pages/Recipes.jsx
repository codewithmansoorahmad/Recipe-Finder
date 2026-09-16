import { useEffect, useState } from "react";
import RecipesHero from "../components/RecipesHero";
import { callApi } from "../services/api";
import RecipesData from "../components/RecipesData";
import "../css/Recipes.css";
import SearchRecipe from "../components/HomeSearchRecipes";

export default function Recipes({recipes,setRecipes,err,setErr,results,setResults,recipe,setRecipe}) {
  const [filterCusine, setFilterCusine] = useState("");
  const [difficuilty, setDifficuilty] = useState("");
  const [cookTime, setCookTime] = useState("");

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

      <RecipesData
        recipes={recipes}
        results={results}
        setRecipes={setRecipes}
          err={err}
        setErr={setErr}
        recipe={recipe}
        setResults={setResults}
      />
      <SearchRecipe
        filterCusine={filterCusine}
        recipes={recipes}
        setRecipes={setRecipes}
        recipe={recipe}
   
        cookTime={cookTime}
        difficuilty={difficuilty}
      />
    
    </div>
  );
}
