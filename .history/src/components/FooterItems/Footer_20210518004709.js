import React from "react";
import "../FooterItems/FooterItems";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Stores from "./FooterItems";

const Footer = (props) => {
  return (
    <div className="footerSection">
      <ul>
        {" "}
        {Stores.map((Stores) => {
          return (
            <li key={Stores}>
              <strong> {Stores.StoreHeading} </strong> <p> {Stores.store} </p>{" "}
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default Footer;
