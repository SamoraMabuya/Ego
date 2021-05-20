import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logobrown from "../assets/Logo/logobrown.png";
import navLogo from "../assets/Logo/logo white.png";

import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {

  return (
    <div className="header">
      <header>
      <GiHamburgerMenu className="burger"/>
      <img src={logobrown} className="logobrown" alt="logo" />
      </header>
      
      <nav className="navbar active">
      <img src={navLogo} className="navLogo" alt="navLogo" />

        <ul className="navbarItems">
          {" "}
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.linkName} href={item.url}>
                  {item.title}
                </a>{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;
