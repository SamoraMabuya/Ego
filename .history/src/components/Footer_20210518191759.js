import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Stores, Social} from "./FooterItems";

const Footer = (props) => {
  return (
    <div className="footerSection">
      <ul>
        {Stores.map((stores) => {
          return (
            <li key={stores}>
              <div className="StoreHeading"> {stores.StoreHeading} 
              </div> 
              <p className="ListItem"> {stores.ListItem} </p>{" "}
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {Social.map((Social) => {
          return (
            <li key={Social}>
              <div className="FollowHeading"> {Social.FollowHeading} 
              </div> 
              <p className="ListItem2"> {Social.ListItem2} </p>{" "}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Footer;
