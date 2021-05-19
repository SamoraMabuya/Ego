import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Stores, Social } from "./FooterItems";

const Address = (props) => {
  return <p>{props.location}</p>;
};

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="container">
        <ul>
          {Stores.map((stores, index) => {
            return (
              <li key={index}>
                <div className="StoreHeading"> {stores.StoreHeading}</div>
                <p className="ListItem"> {stores.ListItem} </p>{" "}
              </li>
            );
          })}
        </ul>
        <ul>
          {Social.map((social, keyIndex) => {
            return (
              <li key={keyIndex}>
                <div className="FollowHeading"> {social.FollowHeading}</div>
                <p className="ListItem2"> {social.ListItem2} </p>{" "}
              </li>
            );
          })}
        </ul>

        <ul>
          <li>
            <div className="ourOffice">Our Office</div>

            <Address location="11 Bell Drive" />
            <br />
            <Address location="Milldogs Business Park" />
            <br />
            <Address location="Midrand 1230" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
