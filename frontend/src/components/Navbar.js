import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  /* Function to set header text based on the current page */
  const changeTitle = () => {
    switch (window.location.pathname) {
      case "/Brothers":
        return "Brothers";
      case "/Barrels":
        return "Barrels";
      case "/Barrels/Details":
        return "Barrels";
      case "/Horizontals":
        return "Horizontals";
      case "/Laser":
        return "Laser Engraver/Saw";
      case "/Lathe":
        return "Lathe Department";
      case "/ModelShop":
        return "Model Shop";
      case "/MoriTsugami":
        return "Mori/Tsugami";
      case "/UppersLowers":
        return "Uppers & Lowers";
      case "/Verticals":
        return "Verticals";
      default:
        return "Dashboard";
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div id="title-container">
            <h1 id="page-title">{changeTitle()}</h1>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
