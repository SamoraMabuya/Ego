import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../logo.svg"

const Navbar = () => {
  return (
    <div>
    <img src={logo} className="App-logo" alt="logo" />
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
