import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logobrown from "../assets/Logo/logobrown.png";
import navLogo from "../assets/Logo/logo white.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Router } from "react-router";
const Navbar = () => {
  // const [currentState, setcurrentStaet] = useState(false);

  const showSideNav = () => setSidebar(!sidebar)
  return (
    <div className="header">
      <header>
        <GiHamburgerMenu className="burger" />
        <img src={logobrown} className="logobrown" alt="logo" />
      </header>
      {/* sidebar ? 'navbar active' : 'navbar' */}
      <nav className="navbar">
        <img src={navLogo} className="navLogo" alt="navLogo" />
        <AiFillCloseCircle className="closeIcon" />

          <ul className="navbarItems ">
            {" "}
            {NavItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>
                    {item.title}
                  </Link>
                  {/* <a className={item.linkName} href={item.url}>
                    {item.title}
                  </a> */}
                </li>
              );
            })}
          </ul>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
