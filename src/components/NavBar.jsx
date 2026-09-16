import { NavLink } from "react-router-dom";

export default function NavBar({isIcon,setIsIcon}){
    return <div className="nabar">
<ul className={!isIcon? "links":"open-links"}>
    <li><NavLink to="/" onClick={()=>setIsIcon(false)} className="link">Home</NavLink></li>
    <li><NavLink to="/recipes" onClick={()=>setIsIcon(false)} className="link">Recipes</NavLink></li>
    <li><NavLink to="favorites" onClick={()=>setIsIcon(false)} className="link">Favorites</NavLink></li>
</ul>
    </div>
}