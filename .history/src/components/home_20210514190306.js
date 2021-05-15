import React from "react";
import "../Sass/home.scss";
import Navigation from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png";
import mainhero from "../assets/Shoes/main hero shoe.png";
import downnWardShoe from "../assets/Shoes/downward.png";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div className="homeSection">
      <div className="firstpart">
        <Navigation />
        <Container>
          <Row>
            <Col>
            <div className="headline">
            A <strong>Haven </strong>
              Of The Best
              <strong> Footwear</strong>
            </div>
              
            </Col>
          </Row>
          <Row>
            <Col> Living the dream. A wide variety of shoes for everyone.</Col>
          </Row>
        </Container>
        {/* <div className="headline">
          A <strong>Haven </strong>
          Of The Best
          <strong> Footwear</strong>
        </div>
        <div className="subheadline">
          Living the dream. A wide variety of shoes for everyone.
        </div> */}
        <img className="whiteAirs" src={WhiteAirs} alt="whiteAirs" />
        <img className="brownSneaker" src={mainhero} alt="mainheroshoe" />
        <img src={downnWardShoe} class="downwardShoe" alt="downwardshoe" />
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
