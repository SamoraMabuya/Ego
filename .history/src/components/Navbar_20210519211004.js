import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {

  return (
    <div className="header">
      <header>
      <GiHamburgerMenu className="burger"/>
      <img src={logo} className="logo" alt="logo" />
      </header>
      
      <nav className="navbar">
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
