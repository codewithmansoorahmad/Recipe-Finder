import { NavLink } from "react-router-dom";

export default function NavBar({isIcon}){
    return <div className="nabar">
<ul className={!isIcon? "links":"open-links"}>
    <li><NavLink className="link">Home</NavLink></li>
    <li><NavLink className="link">Recipes</NavLink></li>
    <li><NavLink className="link">Favorites</NavLink></li>
</ul>
    </div>
}