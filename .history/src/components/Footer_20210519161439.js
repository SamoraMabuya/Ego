import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Stores, Social} from "./FooterItems";


// const address = (props) => {
//   return <p>{props.place}</p>
// } 
const Welcome = (props) => {
  return <h1>Hello, {props.place}</h1>;
}
// }
// function Welcome(props) {
//   return <h1>Hello, {props.place}</h1>;
// }

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

            <div className="ourOffice">Our Office
            <Welcome place="11 Bell Drive
Milldogs Business Park
Midrand
1230
" />
            </div>



    </div>
  );
};

export default Footer;
