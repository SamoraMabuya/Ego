import "../Sass/_navbar.scss";
import logobrown from "../assets/Logo/logobrown.png";
import navLogo from "../assets/Logo/logo white.png";
import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import { NavLink } from "react-router-dom";

// import Shop from "./Shop";
// import Home from "./Home";

const Navbar = () => {
    const [sideNav, setsideNav] = useState(false);

    const showSideNav = () => setsideNav(!sideNav);
    return ( <
        div className = "header" >
        <
        header >
        <
        GiHamburgerMenu className = "burger"
        onClick = { showSideNav }
        /> <
        img src = { logobrown }
        className = "logobrown"
        alt = "logo" / >
        <
        Image src = { blueheels }
        alt = "blueheels"
        fluid / >

        <
        /header> <
        nav className = { sideNav ? "navbar active" : "navbar" } >
        <
        img src = { navLogo }
        className = "navLogo"
        alt = "navLogo" / >
        <
        AiFillCloseCircle className = "closeIcon"
        onClick = { showSideNav }
        />

        <
        ul className = "navbarItems"
        onClick = { showSideNav } > {
            /* {NavItems.map((item, index) => {
                        return ( */
        } <
        li > { /* <NavLink activeClassName="is-active" to={item.url}>{item.title}</NavLink> */ }

        <
        NavLink activeClassName = "is-active"
        exact to = "/" > Home < /NavLink> <
        NavLink activeClassName = "is-active"
        to = "/Shop" > Shop < /NavLink> <
        NavLink activeClassName = "is-active"
        to = "/Contact" > Contact < /NavLink> <
        NavLink activeClassName = "is-active"
        to = "/About" > About < /NavLink>


        <
        /li> { /* ); */ } { /* })} */ } <
        /ul> <
        /nav> <
        /div>
    );
};

export default Navbar;