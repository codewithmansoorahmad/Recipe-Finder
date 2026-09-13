import { ArrowRight, Clock, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function PopularRecipes({recipes}){
    const naigate=useNavigate()
    return <div className="popular-recipes">
        <div className="recipes-top">
            <h3>Popular Recipes</h3>
            <p>Discover recipes that people love </p>

        </div>

     <div className="recipes-grid">
{
    recipes.length>0?recipes.map((item)=>{
        return <div className="recipe" key={item.id}>
<img src={item.image} alt="" />
<h3>{item.name}</h3>
<div className="rat-time">
    <p>{item.rating} <span className="icon"><Star/></span></p>
    <p>{item.cookTimeMinutes} min <span className="icon"><Clock/></span></p>
</div>
<p>{item.cuisine}</p>
<button>view recipe <span className="icon"><ArrowRight/></span></button>
        </div>
    }):null
}
    </div>
    <button className="all-recipes-btn" onClick={()=>naigate("/recipes`")}>View All Recipes</button>
    </div>

}