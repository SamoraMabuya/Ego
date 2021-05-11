import React from "react"
import "../Sass/_navbar.scss"
import NavItems from './NavItems/NavItems'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbarItems">
        {NavItems.map((item, index) => {
          <li key={index}>
            <a className={item.linkName} href={item.url}>
              {item.title}
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
