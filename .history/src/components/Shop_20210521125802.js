import React from "react";
import "../Sass/Shop.scss";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import blueheels from "../assets/Shoes/holding blue high heels.png"
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png"
import displaySneakers from "../assets/Shoes/sneakers on display.png"
import Image from "react-bootstrap/Image"
const Shop = () => {
  return (
    <div className="shopSection">
      <Navbar />

      <div className="secondpart">
        <Container className="headlineContainer">
          <Row>
            <Col className="headline">
              We Make <strong>Them </strong>
              So You Can Feel <strong>Confident</strong>
            </Col>
          </Row>
        </Container>


      </div>
    </div>
  );
};

export default Shop;
