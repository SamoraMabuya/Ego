import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import {ReactComponent as Logo} from "../assets/Logo/logobrown.svg"

const Navbar = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="Logo"/>
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
