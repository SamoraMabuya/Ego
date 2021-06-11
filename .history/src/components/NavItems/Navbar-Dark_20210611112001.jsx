import "../../Sass/_navbar-dark.scss";

import logoblack from "../../assets/Logo/logo white.png";

import React, { useState } from "react";
import navLogo from "../../assets/Logo/logo white.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sideNav, setsideNav] = useState(false);

  const showSideNav = () => setsideNav(!sideNav);
  return (
    <div className="header">
      <header>
        <GiHamburgerMenu className="burger" onClick={showSideNav} />{" "}
        <img src={logoblack} className="logobrown" alt="logo" />
      </header>{" "}
      <nav className={sideNav ? "navbar active" : "navbar"}>
        <img src={navLogo} className="navLogo" alt="navLogo" />
        <AiFillCloseCircle className="closeIcon" onClick={showSideNav} />
        <ul className="darknavbarItems" onClick={showSideNav}>

          <li>
            <NavLink activeClassName="activelink" exact to="/">
              Home{" "}
            </NavLink>{" "}
            <NavLink activeClassName="activelink" to="/Shop">
              Shop{" "}
            </NavLink>{" "}
            <NavLink activeClassName="activelink" to="/Contact">
              Contact{" "}
            </NavLink>{" "}

            <NavLink activeClassName="activelink" to="/About">
              About{" "}
            </NavLink>{" "}
          </li>{" "}
          {/* ); */} {/* })} */}{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;
