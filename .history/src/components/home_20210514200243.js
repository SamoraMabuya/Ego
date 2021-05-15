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

        <Container>
          <Row>
            <Col >
            <img src={WhiteAirs} alt="whiteAirs" fluid/>
              {/* <Image src="holder.js/171x180" rounded /> */}
            </Col>
            <Col >
            <img src={mainhero} alt="mainheroshoe" />

              {/* <Image src="holder.js/171x180" roundedCircle /> */}
            </Col>
            <Col >
            <img src={downnWardShoe} alt="downwardshoe" />
              {/* <Image src="holder.js/171x180" thumbnail /> */}
            </Col>
          </Row>
        </Container>
        <button className="shopbutton">Shop</button>
      </div>

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
