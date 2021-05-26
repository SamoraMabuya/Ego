import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png";
import mainhero from "../assets/Shoes/main hero shoe.png";
import downnWardShoe from "../assets/Shoes/downward.png";
import mainheroSide from "../assets/Shoes/main hero shoe side shot.png";
import beigeBoots from "../assets/Shoes//beige boots.png";
import HomeFooter from "./Footers/HomeFooter";

import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div className="homeSection">
      <Navbar />

      <div className="firstpart">
        <Container className="headlineContainer">
          <Row>
            <Col className="headline">
              A <strong> Haven </strong>
              Of The Best <strong> Footwear </strong>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col className="subheadline">
              {" "}
              Living the dream.A wide variety of shoes for everyone.{" "}
            </Col>{" "}
          </Row>{" "}
        </Container>{" "}
        <Container className="container-fluid">
          <Row className="grid-container">
            <Col className="shoeCol">
              <Image
                className="whiteAirs"
                src={WhiteAirs}
                alt="whiteAirs"
                fluid
              />
            </Col>{" "}
            <Col className="shoeCol">
              <Image
                className="brownSneaker"
                src={mainhero}
                alt="mainheroshoe"
                fluid
              />
            </Col>{" "}
            <Col className="shoeCol">
              <Image
                className="downwardShoe"
                src={downnWardShoe}
                alt="downwardshoe"
                fluid
              />
            </Col>{" "}
          </Row>{" "}
        </Container>{" "}
        <button className="shopbutton"> Shop </button>{" "}
      </div>

      <div className="secondpart">
        <div className="grid-ContainerSecondpart">
          <ul>
            <li>
              <div className="secondpart-headline">
                {" "}
                “ Different occassions require unique shoes”.{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <button className="Browse"> Browse </button>{" "}
            </li>{" "}
          </ul>{" "}
          <ul>
            <li>
              <div className="whiteBox">
                <div className="new"> New </div>{" "}
                <Image
                  className="mainheroSide"
                  src={mainheroSide}
                  alt="mainheroside"
                />
                <div className="titlebanner">
                  <div className="delto"> Delto Sneakers </div>{" "}
                </div>{" "}
              </div>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>

      <div className="thirdpart">
        <div className="grid-Containerthirdpart">
          <ul>
            <li>
              <div className="thirdpart-headline">
                {" "}
                “ Boots that make you feel alive”.{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <button className="Shop"> Shop </button>{" "}
            </li>{" "}
          </ul>{" "}
          <ul>
            <li>
              <div className="whiteBox">
                <div className="new"> New </div>{" "}
                <Image
                  className="beigeBoots"
                  src={beigeBoots}
                  alt="beigeBoots"
                />
                <div className="titlebanner">
                  <div className="stellion"> Stellion Boots </div>{" "}
                </div>{" "}
              </div>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>

      <HomeFooter/>
    </div>
  );
};

export default Home;
