import React from "react";
import "../Sass/home.scss";
import Navigation from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png";
import mainhero from "../assets/Shoes/main hero shoe.png";
import downnWardShoe from "../assets/Shoes/downward.png";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Home = (props) => {
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
            <Col>
              <Image
                className="whiteAirs"
                src={WhiteAirs}
                alt="whiteAirs"
                fluid
              />
            </Col>
            <Col>
              <Image
                className="brownSneaker"
                src={mainhero}
                alt="mainheroshoe"
                fluid
              />
            </Col>
            <Col>
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

      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>

      <div className="secondpart">
        <div className="secondpart-headline">
          “Different occassions
          <br></br>
          require unique shoes”.
        </div>
        <button className="Browse">Browse</button>
        <div className="whiteBox"></div>
      </div>
    </div>
  );
};

export default Home;
