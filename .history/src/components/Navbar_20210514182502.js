import React from "react";
import "../Sass/_navbar.scss";
import NavItems from "./NavItems/NavItems";
import logo from "../assets/Logo/logobrown.png"

const Navbar = () => {
  return (
    <>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
    // <div className="header">
    // <img src={logo} className="logo" alt="logo" />
    //   <nav className="navbar">
    //     <ul className="navbarItems">
    //       {NavItems.map((item, index) => {
    //         return (
    //           <li key={index}>
    //             <a className={item.linkName} href={item.url}>
    //               {item.title}
    //             </a>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Navbar;
