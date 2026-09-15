import { useSelector } from "react-redux"

export default function Favorites(){
    let favorites=useSelector((state)=>{state.favorites.favoritesRecipes})
    console.log(favorites)
    return <div className="favorites">
        <h1>favorites</h1>
    </div>
}