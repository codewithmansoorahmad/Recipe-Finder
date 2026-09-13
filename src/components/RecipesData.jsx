import { ArrowRight, Clock, Star } from "lucide-react"

export default function RecipesData({recipes,error}){
    return <div className="recipes-data">
{
    recipes.length>0?recipes.map((item)=>{
        return <div className="recipe" key={item.id}>
<img src={item.image} alt={item.name} />
<h3>{item.name}</h3>
<div className="rat-time">
    <p>{item.rating} <span className="icon"><Star/></span></p>
    <p>{item.cookTimeMinutes? item.cookTimeMinutes+"min" :"N/A"} <span className="icon"><Clock/></span></p>
</div>
<p>{item.cuisine}</p>
<button>view recipe <span className="icon"><ArrowRight/></span></button>
        </div>
    }):<h1>{error}</h1>
}
    </div>
}