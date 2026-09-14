import { useEffect, useState } from "react";
import RecipesHero from "../components/RecipesHero";
import { callApi } from "../services/api";
import RecipesData from "../components/RecipesData";
import "../css/Recipes.css";
import SearchRecipe from "../components/HomeSearchRecipes";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [results, setResults] = useState(null);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [timeRecipes, setTimeRecipes] = useState([]);
  const [difficuiltRecipes, SetDifficultRecipes] = useState([]);
  const [filterCusine, setFilterCusine] = useState("");
  const [difficuilty, setDifficuilty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [recipe, setRecipe] = useState("");
  const [err, setErr] = useState("");
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
        setSearchErr={setSearchErr}
      />

      <RecipesData
        recipes={recipes}
        results={results}
        setRecipes={setRecipes}
          err={err}
        setErr={setErr}
        recipe={recipe}
      />
      <SearchRecipe
        filterCusine={filterCusine}
        recipes={recipes}
        setRecipes={setRecipes}
        recipe={recipe}
        setFilterRecipes={setFilterRecipes}
        SetDifficultRecipes={SetDifficultRecipes}
        setTimeRecipes={setTimeRecipes}
        cookTime={cookTime}
        difficuilty={difficuilty}
      />
    </div>
  );
}
