import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png"

const Navbar = () => {
  return (
    <div className="header">
    <img src={logo} className="logo" alt="logo" />
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
