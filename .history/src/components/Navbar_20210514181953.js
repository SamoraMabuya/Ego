import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png";
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarFunc = () => {
  return (
    <div className="header">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarFunc;
