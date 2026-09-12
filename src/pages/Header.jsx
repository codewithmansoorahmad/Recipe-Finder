import { ChefHat, Menu, X } from "lucide-react";
import NavBar from "../components/NavBar";
import "../css/Header.css"
import { useState } from "react";
export default function Header(){
const [isIcon,setIsIcon]=useState(false)

    return  <header className="header">
        <div className="header-main">
        <div className="logo">
<ChefHat size={30} className="hat"/>
<h3>Recipe Finder</h3>
        </div>
   <NavBar  isIcon={isIcon}/>


        </div>

        <div className="menu">
           <button className="menu-icon" onClick={()=>setIsIcon(!isIcon)}>{!isIcon? <Menu />:<X/>}</button>
        </div>
    </header>

}
