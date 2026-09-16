import { ArrowRight, Clock, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addFavorites, removeFavorite } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

export default function RecipesData({ recipes, results, err }) {
  const favorites = useSelector((state) => state.favorites.favoritesRecipes);
  const dispatch = useDispatch();

  let recipesData = results === null ? recipes : results;
  const navigate = useNavigate();

  return (
    <div className="recipes-data">
      {recipesData.length > 0 ? (
        recipesData.map((item) => {
          const isFavorite = favorites.some((recipe) => recipe.id === item.id);

          return (
            <div
              className="recipe"
              key={item.id}
              onClick={() => navigate("/recipes/" + item.id)}
            >
              <button
                className="favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  isFavorite ? dispatch(removeFavorite(item.id) ):dispatch(addFavorites(item));
                }}
              >
                <Heart
                  className="icon"
                  color={isFavorite ? "red" : "black"}
                  fill={isFavorite ? "red" : "white"}
                />
              </button>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="rat-time">
                <p>
                  {item.rating}{" "}
                  <span className="icon">
                    <Star />
                  </span>
                </p>
                <p>
                  {item.cookTimeMinutes ? item.cookTimeMinutes + "min" : "N/A"}{" "}
                  <span className="icon">
                    <Clock />
                  </span>
                </p>
              </div>
              <p>{item.cuisine}</p>
              <button onClick={() => navigate("/recipes/" + item.id)}>
                view recipe{" "}
                <span className="icon">
                  <ArrowRight />
                </span>
              </button>
            </div>
          );
        })
      ) : (
        <h1>{err}</h1>
      )}
    </div>
  );
}
