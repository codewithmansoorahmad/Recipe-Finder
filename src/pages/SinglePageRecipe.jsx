import { useEffect, useState } from "react";
import { getRecipeById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import "../css/SinglePageRecipe.css";

export default function SinglePageRecipe() {
  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    async function getRecipe() {
      try {
        let data = await getRecipeById(id);
        setRecipe(data);
        console.log(data);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    }
    getRecipe();
  }, []);
  return (
    <div className="single-page">
      <button onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>
      {!error ? (
        <div className="recipe-page">
            <button className="favorite"><Heart className="icon"/></button>
          <img src={recipe.image} alt="" />
          <h1>{recipe.name}</h1>
          <p>{recipe.cuisine}</p>
          <p>{recipe.cookTimeMinuts}</p>
          <p>{recipe.caloriesPerServing}</p>
          <p>{recipe.difficulty}</p>
          <div className="bith-side">

          <div className="ingredients">
            <h1>Ingredients</h1>
            <ul>
              {recipe.ingredients?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          
          </div>
          <div className="instructions">
              <ol>
              <h1>Instructions</h1>

              {recipe.instructions?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          </div>
          </div>

        </div>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
}
