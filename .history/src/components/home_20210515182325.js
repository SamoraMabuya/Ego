import React from "react";
import "../Sass/home.scss";
import Navigation from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png";
import mainhero from "../assets/Shoes/main hero shoe.png";
import downnWardShoe from "../assets/Shoes/downward.png";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const Home = (props) => {
  const element = <div New="New"/>

  return (
    
    <div className="homeSection">
      <div className="firstpart">
        <Navigation />
        <Container className="headlineContainer">
          <Row>
            <Col className="headline">
              A <strong>Haven </strong>
              Of The Best
              <strong> Footwear</strong>
            </Col>
          </Row>
          <Row>
            <Col className="subheadline">
              {" "}
              Living the dream. A wide variety of shoes for everyone.
            </Col>
          </Row>
        </Container>

        <Container className="container-fluid">
          <Row className="grid-container">
            <Col className="shoeCol">
              <Image
                className="whiteAirs"
                src={WhiteAirs}
                alt="whiteAirs"
                fluid
              />
            </Col>
            <Col className="shoeCol">
              <Image
                className="brownSneaker"
                src={mainhero}
                alt="mainheroshoe"
                fluid
              />
            </Col>
            <Col className="shoeCol">
              <Image
                className="downwardShoe"
                src={downnWardShoe}
                alt="downwardshoe"
                fluid
              />
            </Col>
          </Row>
        </Container>
        <button className="shopbutton">Shop</button>
      </div>

      <div className="secondpart">
        <div className="grid-ContainerSecondpart">
          <ul>
            <li>
              <div className="secondpart-headline">
              “Different occassions require unique shoes”.

              </div>
            </li>
            <li>
            <button className="Browse">
              Browse
            </button>
            </li>
          </ul>
          <ul>
            <li>
            <div className="whiteBox">
              <div className="new">{element}</div>

            </div>

            </li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
