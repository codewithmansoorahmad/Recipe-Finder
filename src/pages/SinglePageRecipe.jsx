import { useEffect, useState } from "react";
import { getRecipeById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Heart } from "lucide-react";
import "../css/SinglePageRecipe.css";
import ScrollTop from "../components/ScrollTop";
import { addFavorites } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function SinglePageRecipe() {
    const dispatch=useDispatch()
    const [isFavorite,setIsFavorite]=useState(false)

  const [recipe, setRecipe] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  <ScrollTop/>
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
      <button onClick={() => {navigate(-1)}}>
        <ArrowLeft />
      </button>
      {!error ? (
        <div className="recipe-page">
            <button className="favorite"><Heart className="icon" onClick={()=>{dispatch(addFavorites(recipe))}}/></button>
          <img src={recipe.image} alt="" />
          <h1>{recipe.name}</h1>
          <p>Cuisine: {recipe.cuisine}</p>
           <p>CookTime {recipe.cookTimeMinutes?  recipe.cookTimeMinutes+"min" :"N/A"} <span className="icon"><Clock/></span></p>
          <p>Calories: {recipe.caloriesPerServing}</p>
          <p>DIfficulty Level: {recipe.difficulty}</p>
          <div className="bith-side">

          <div className="ingredients">
            <h1>Ingredients</h1>

            <ol>

              {recipe.ingredients?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ol>
          
          </div>
          <div className="instructions">
              <h1>Instructions</h1>

              <ol>

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
