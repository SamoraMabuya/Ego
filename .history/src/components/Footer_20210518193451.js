import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Stores, Social} from "./FooterItems";

const Footer = (props) => {
  return (
    <div className="footerSection">
      <ul>
        {Stores.map((stores, index) => {
          return (
            <li key={index}>
              <div className="StoreHeading"> {stores.StoreHeading} 
              </div> 
              <p className="ListItem"> {stores.ListItem} </p>{" "}
            </li>
          );
        })}
      </ul>
      <ul>
        {Social.map((social, keyIndex) => {
          return (
            <li key={keyIndex}>
              <div className="FollowHeading"> {social.FollowHeading} 
              </div> 
              <p className="ListItem2"> {social.ListItem2} </p>{" "}
            </li>
          );
        })}
      </ul>

      <ul>
          <li>
            <div className="ourOffice">Our Office</div>
            <p className="address">
            11 Bell Drive
            <br>
Milldogs Business Park
<br>
Midrand
1230
<br>

            </p>
          </li>

      </ul>
    </div>
  );
};

export default Footer;
