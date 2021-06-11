import "../../Sass/_navbar-dark.scss";
import classes from "../../Sass/_navbardark.module.scss";

import logoblack from "../../assets/Logo/logo black.png";

import React, { useState } from "react";
import navLogo from "../../assets/Logo/logo white.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [classes, setsideNav] = useState(false);

  const showSideNav = () => setsideNav(!classes);
  return (
    <div className="header">
      <header>
        <GiHamburgerMenu className="burger" onClick={showSideNav} />{" "}
        <img src={logoblack} className="logobrown" alt="logo" />
      </header>{" "}
      <nav className={classes ? "navbar active" : "navbar"}>
        <img src={navLogo} className="navLogo" alt="navLogo" />
        <AiFillCloseCircle className="closeIcon" onClick={showSideNav} />
        <ul className="navbarItems" onClick={showSideNav}>

          <li>
            <NavLink activeClassName="is-active" exact to="/">
              Home{" "}
            </NavLink>{" "}
            <NavLink activeClassName="is-active" to="/Shop">
              Shop{" "}
            </NavLink>{" "}
            <NavLink activeClassName="is-active" to="/Contact">
              Contact{" "}
            </NavLink>{" "}

            <NavLink activeClassName="is-active" to="/About">
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
