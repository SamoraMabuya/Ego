import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png"
import mainhero from "../assets/Shoes/main hero shoe.png"
import downnWardShoe from "../assets/Shoes/downward.png"

const Home = (props) => {
  return (
    <div className="homeSection">
      <Navbar />
      <p class="fs-1">.fs-1 text</p>

      <div className="headline">
        A <strong>Haven </strong>
          Of The Best
        <strong> Footwear</strong>
      </div>
      <div className="subheadline">
      Living the dream. A wide variety of shoes for everyone.
      </div>
      <img src={WhiteAirs} class="whiteAirs" alt="whiteAirShoes"/>
      <img src={mainhero} class="brownSneaker" alt="mainheroshoe"/>

      <img className="downwardShoe" src={downnWardShoe}  alt="downwardshoe"/>
      <button className="shopbutton">Shop</button>

    </div>
  );
};

export default Home;
