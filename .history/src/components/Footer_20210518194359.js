import React from "react";
import "../Sass/_footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {Stores, Social} from "./FooterItems";

const Footer = (props) => {
  return (
    <Container className="footerSection">
      <Row>
        {Stores.map((stores, index) => {
          return (
            <Col key={index}>
              <div className="StoreHeading"> {stores.StoreHeading} 
              </div> 
              <p className="ListItem"> {stores.ListItem} </p>{" "}
            </Col>
          );
        })}
      </Row>
      <Row>
        {Social.map((social, keyIndex) => {
          return (
            <Col key={keyIndex}>
              <div className="FollowHeading"> {social.FollowHeading} 
              </div> 
              <p className="ListItem2"> {social.ListItem2} </p>{" "}
            </Col>
          );
        })}
      </Row>

      <Row>
          <Col>
            <div className="ourOffice">Our Office</div>
            <p className="address">
            11 Bell Drive
            Milldogs Business Park

Midrand
            </p>
          </Col>

      </Row>
    </Container>
  );
};

export default Footer;
