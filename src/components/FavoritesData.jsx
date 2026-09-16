import { ArrowRight, Clock, Heart, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFavorite } from "../redux/slice";

export default function FavoritesData() {
  let favorites = useSelector((state) => state.favorites.favoritesRecipes);
  console.log(favorites)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <div className="favorites-data">

      {favorites.length > 0 ? (
        <>
        <h1> favorites Recipe you added</h1>
        {
        favorites.map((item) => {
            
          return (
              <div
                className="favorite-recipe"
                key={item.id}
                onClick={() => navigate("/recipes/" + item.id)}
              >
                <button onClick={(e)=>{e.stopPropagation();dispatch(removeFavorite(item.id))}}><Heart color="red" fill="red"/></button>
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
                    {item.cookTimeMinutes
                      ? item.cookTimeMinutes + "min"
                      : "N/A"}{" "}
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
        })}
        </>
      ) : (
        <h1>NO favorites are added </h1>
      )}
    </div>
  );
}
