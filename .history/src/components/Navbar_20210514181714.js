import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png"

const Navbar = () => {
    return ( <
        div className = "header" >
        <
        img src = { logo }
        className = "logo"
        alt = "logo" / >
        <
        nav className = "navbar" >
        <
        ul class = "nav justify-content-center" >
        <
        li class = "nav-item" >
        <
        a class = "nav-link active"
        aria - current = "page"
        href = "#" > Active < /a> <
        /li> <
        li class = "nav-item" >
        <
        a class = "nav-link"
        href = "#" > Link < /a> <
        /li> <
        li class = "nav-item" >
        <
        a class = "nav-link"
        href = "#" > Link < /a> <
        /li> <
        li class = "nav-item" >
        <
        a class = "nav-link disabled"
        href = "#"
        tabindex = "-1"
        aria - disabled = "true" > Disabled < /a> <
        /li> <
        /ul> <
        /nav> <
        /div>
    );
};

export default Navbar;