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

        <div className="shopContainer">
          <div className="shop-gridcontainer">
            <div className="shop-gridColumn">
              <div className="shopHeadline">
                We Make <strong>Them </strong>
                So
                <br />
                You Can Feel <strong>Confident</strong>
              </div>
            </div>
            <div className="shop-gridColumn">
              <Image className="blueSneakers" src={blueNikeSneakers} alt="blueSneakers" fluid />
            </div>
            {/* <div>
              <Image className="displaySneakers" src={displaySneakers} alt="displaySneakers" fluid />
            </div> */}
            {/* <Col>
              <Image src={blueheels} alt="blueheels" fluid />
            </Col> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Shop;
