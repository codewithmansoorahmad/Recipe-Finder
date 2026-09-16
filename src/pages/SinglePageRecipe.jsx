import { useContext, useEffect, useState } from "react";
import { getRecipeById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Heart } from "lucide-react";
import "../css/SinglePageRecipe.css";
import ScrollTop from "../components/ScrollTop";
import { addFavorites, removeFavorite } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { ContexData } from "../ContextData/context";

export default function SinglePageRecipe() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const {recipes,results}=useContext(ContexData)
 const favorites=useSelector((state)=>state.favorites.favoritesRecipes)
 let allData=results!==null?[...recipes,...results]:recipes
 console.log(allData)
 let recipe=allData.find((item)=>Number(item.id)===Number(id))


console.log(recipe.id)
  const isFavorite=favorites.some((item)=>item.id==recipe.id)
  const navigate = useNavigate();
  <ScrollTop />;
 
  return (
    <div className="single-page">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowLeft />
      </button>
      
        <div className="recipe-page">
          <button className="favorite"    onClick={() => {
           isFavorite?dispatch(removeFavorite(recipe.id)) :dispatch(addFavorites(recipe)) ;
              }}

               >
            <Heart
              className="icon"
              color={isFavorite?"red":"black"}
              fill={isFavorite?"red":"white"}
          
            />
          </button>
          <img src={recipe.image} alt="" />
          <h1>{recipe.name}</h1>
          <p>Cuisine: {recipe.cuisine}</p>
          <p>
            CookTime{" "}
            {recipe.cookTimeMinutes ? recipe.cookTimeMinutes + "min" : "N/A"}{" "}
            <span className="icon">
              <Clock />
            </span>
          </p>
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
      
    </div>
  );
}
