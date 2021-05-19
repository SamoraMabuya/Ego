import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Stores from "./FooterItems";

const Footer = (props) => {
  return (
    <div className="footerSection">
      <ul>
        {Stores.map((Stores) => {
          return (
            <li key={Stores}>
              <div className="StoreHeading"> {Stores.StoreHeading} 
              </div> 
              <p className="ListItem"> {Stores.store} </p>{" "}
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {Stores.map((social) => {
          return (
            <li key={social}>
              <div className="FollowHeading"> {Stores.StoreHeading} 
              </div> 
              <p className="ListItem2"> {Stores.store} </p>{" "}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Footer;
