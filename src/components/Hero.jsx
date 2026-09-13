

import { Search } from "lucide-react"
import image from "../assets/image.avif"
export default function Hero({recipe,setRecipe}){
    return <div className="hero">
<div className="hero-details">
    <h1>Find your Perfect Recipe</h1>
    <p>Discover quick, whole food recipes that you can cook</p>
    <div className="search">
        <input type="text" placeholder="Search your recipe"  value={recipe} onChange={(e)=>setRecipe(e.target.value)}/>
        <button><Search className="icon" onClick={()=>}/></button>
    </div>
    

</div>
<div className="image">
        <img src={image} alt="" />
    </div>
    </div>

}