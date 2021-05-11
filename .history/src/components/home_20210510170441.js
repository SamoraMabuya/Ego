import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";

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
      <img src="../assets/Shoes/white air shoes.png" className="whiteAirs"/>
    </div>
  );
};

export default Home;
