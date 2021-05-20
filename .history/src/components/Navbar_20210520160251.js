import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logobrown from "../assets/Logo/logobrown.png";
import navLogo from "../assets/Logo/logo white.png";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Shop from "./Shop";
import Home from "./Home";

const Navbar = () => {
  // const [currentState, setcurrentStaet] = useState(false);

  // const showSideNav = () => setSidebar(!sidebar)
  return (
    <Router>
      <div className="header">
        <header>
          <GiHamburgerMenu className="burger" />
          <img src={logobrown} className="logobrown" alt="logo" />
        </header>
        {/* sidebar ? 'navbar active' : 'navbar' */}
        <nav className="navbar">
          <img src={navLogo} className="navLogo" alt="navLogo" />
          <AiFillCloseCircle className="closeIcon" />

          <ul className="navbarItems ">
            {NavItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>

          <Switch>
            <Route path="/">
              <Home/>
            </Route>

            <Route path="/Shop">
              <Shop/>
            </Route>

          </Switch>
        </nav>{" "}
      </div>
    </Router>
  );
};

export default Navbar;
