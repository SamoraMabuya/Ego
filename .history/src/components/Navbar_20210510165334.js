import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import {ReactComponent as logo} from "../assets/Logo/logobrown.svg"

const Navbar = () => {
  return (
    <div className="header">
      <svg src={logo} className="logo" alt="logo"></svg>
    {/* <img src={logo} className="logo" alt="logo" /> */}
      <nav className="navbar">
        <ul className="navbarItems">
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.linkName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
