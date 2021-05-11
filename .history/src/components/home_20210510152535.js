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
    </div>
  );
};

export default Home;
