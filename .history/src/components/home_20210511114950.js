import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";
import WhiteAirs from "../assets/Shoes/white air shoes.png"
import mainhero from "../assets/Shoes/main hero shoe.png"

const Home = (props) => {
  return (
    <div className="homeSection">
      <Navbar />
      <div className="headline">
        A <strong>Haven </strong>
          Of The Best
        <strong> Footwear</strong>
      </div>
      <div className="subheadline">
      Living the dream. A wide variety of shoes for everyone.
      </div>
      <img className="whiteAirs" src={WhiteAirs} alt="whiteAirs"/>
      <br></br>
      <img className="brownSneaker" src={mainhero}  alt="mainheroshoe"/>
    </div>
  );
};

export default Home;
