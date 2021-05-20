import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logobrown from "../assets/Logo/logobrown.png";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {

  return (
    <div className="header">
 
     <img src={logobrown} className="logobrown" alt="logo" />

      <nav className="navbar active">

      <header>
      <GiHamburgerMenu className="burger"/>
      </header>
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
