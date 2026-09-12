import { NavLink } from "react-router-dom";

export default function NavBar({isIcon}){
    return <div className="nabar">
<ul className={!isIcon? "links":"open-links"}>
    <li><NavLink to="/" className="link">Home</NavLink></li>
    <li><NavLink to="/recipes" className="link">Recipes</NavLink></li>
    <li><NavLink to="favorites" className="link">Favorites</NavLink></li>
</ul>
    </div>
}