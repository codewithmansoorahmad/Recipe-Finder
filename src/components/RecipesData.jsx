import { ArrowRight, Clock, Star } from "lucide-react"
import { useEffect, useState } from "react";
import { callApi } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function RecipesData({recipes,results,setRecipes,err,setErr}){

      // useEffect(() => {
      //   async function getRecipes() {
      //     try {
      //       const data = await callApi(30);
      //       setRecipes(data.recipes);
      //     } catch (error) {
      //       setErr(error.message);
      //     }
      //   }
      //   getRecipes();
      // }, []);


      let recipesData=results===null?recipes:results
      const navigate=useNavigate()

    return <div className="recipes-data">

{

    
    recipesData.length>0?recipesData.map((item)=>{
        return <div className="recipe" key={item.id} onClick={()=>navigate("/recipes/"+item.id)}>
<img src={item.image} alt={item.name} />
<h3>{item.name}</h3>
<div className="rat-time">
    <p>{item.rating} <span className="icon"><Star/></span></p>
    <p>{item.cookTimeMinutes? item.cookTimeMinutes+"min" :"N/A"} <span className="icon"><Clock/></span></p>
</div>
<p>{item.cuisine}</p>
<button onClick={()=>navigate("/recipes/"+item.id)}>view recipe <span className="icon"><ArrowRight/></span></button>
        </div>
    }):<h1>{err}</h1>
    
    
}
    </div>
}