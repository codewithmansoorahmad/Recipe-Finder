

import image from "../assets/image.avif"
export default function Hero(){
    return <div className="hero">
<div className="hero-details">
    <h1>Find your Perfect Recipe</h1>
    <p>Discover quick, whole food recipes that you can cook</p>
    <div className="search">
        <input type="text" placeholder="Search your recipe" />
    </div>
    

</div>
<div className="image">
        <img src={image} alt="" />
    </div>
    </div>
}