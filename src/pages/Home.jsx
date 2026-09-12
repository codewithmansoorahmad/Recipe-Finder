import { useEffect, useState } from "react"
import Hero from "../components/Hero"

import "../css/Home.css"
import { callApi } from "../services/api"
export default function Home(){
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
       async function getRecipes(){
let data=await callApi(6)
setRecipes(data.recipes)
        }
        getRecipes()

    },[])
    console.log(recipes)
    return <div className="home">
        <Hero/>

    </div>
}