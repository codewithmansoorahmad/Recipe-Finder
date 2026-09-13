

import { ArrowRight } from "lucide-react"
import image from "../assets/image.avif"
import { useNavigate } from "react-router-dom"
export default function Hero({}){
    const navigate=useNavigate()
    return <div className="hero">
<div className="hero-details">
    <h1>Find your Perfect Recipe</h1>
    <p>Discover quick, whole food recipes that you can cook</p>
    <div className="search">
       
        <button onClick={()=>{navigate("/recipes")}} className="recipe-btn">Discover Recipe <span><ArrowRight className="icon" size={20}/></span></button>
    </div>
    

</div>
<div className="image">
        <img src={image} alt="" />
    </div>
    </div>

}