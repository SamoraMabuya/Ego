import React from "react";
import "../Sass/Shop.scss";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import blueheels from "../assets/Shoes/holding blue high heels.png";
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png";
import displaySneakers from "../assets/Shoes/sneakers on display.png";
import Image from "react-bootstrap/Image";
const Shop = () => {
  return (
    <div className="shopSection">
      <Navbar />

      <div className="shopSecondPart">
        {/* <div className="shop-Container">
          <div>
            
          </div> */}

        <Container>
          <Row className="shop-gridcontainer">
            <Col className="shop-gridColumn">
              <div className="shopHeadline">
                We Make <strong>Them </strong>
                So
                <br />
                You Can Feel <strong>Confident</strong>
              </div>
            </Col>
            <Col className="shop-gridColumn">
              <Image src={blueNikeSneakers} alt="blueSneakers" fluid />
            </Col>
            <Col>
              <Image src={displaySneakers} alt="displaySneakers" fluid />
            </Col>
            <Col>
              <Image src={blueheels} alt="blueheels" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    // </div>
  );
};

export default Shop;
