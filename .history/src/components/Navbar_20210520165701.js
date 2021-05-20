import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logobrown from "../assets/Logo/logobrown.png";
import navLogo from "../assets/Logo/logo white.png";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { Link } from "react-router-dom";

// import Shop from "./Shop";
// import Home from "./Home";

const Navbar = () => {
  const [currentState, setcurrentStaet] = useState(false);

  const showSideNav = () => setSidebar(!sidebar)
  return (
    <div className="header">
      <header>
        <GiHamburgerMenu className="burger" />
        <img src={logobrown} className="logobrown" alt="logo" />
      </header>
      <nav className={sidebar ? "navbar active" : "navbar"}>
        <img src={navLogo} className="navLogo" alt="navLogo" />
        <AiFillCloseCircle className="closeIcon" />

        <ul className="navbarItems ">
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;