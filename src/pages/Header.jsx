import { ChefHat, Menu, X } from "lucide-react";
import NavBar from "../components/NavBar";
import "../css/Header.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
export default function Header() {
  const [isIcon, setIsIcon] = useState(false);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <ChefHat size={30} className="hat" />
          <h3>Recipe Finder</h3>
        </div>
        <NavBar isIcon={isIcon} setIsIcon={setIsIcon} />

        <div className="menu">
          <button className="menu-icon" onClick={() => setIsIcon(!isIcon)}>
            {!isIcon ? <Menu /> : <X />}
          </button>
        </div>
      </div>

      <div className={isIcon ? "page-locked" : ""}>
        <Outlet />
      </div>
    </header>
  );
}
