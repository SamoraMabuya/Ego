import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png"

const Navbar = () => {
  return (
    <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Navbar>
</Container>
  );
};

export default Navbar;
