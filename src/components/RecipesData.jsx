import { ArrowRight, Clock, Star } from "lucide-react"
import { useEffect, useState } from "react";
import { callApi } from "../services/api";

export default function RecipesData({recipes,results,setRecipes,err,setErr}){
    console.log(results)

      useEffect(() => {
        async function getRecipes() {
          try {
            const data = await callApi(30);
            console.log(data.recipes)
            setRecipes(data.recipes);
          } catch (error) {
            setErr(error.message);
          }
        }
        getRecipes();
      }, []);
      let recipesData=results===null?recipes:results

    return <div className="recipes-data">
{
    
    recipesData.length>0?recipesData.map((item)=>{
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
    }):<h1>{err}</h1>
    
    
}
    </div>
}