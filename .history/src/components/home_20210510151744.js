import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <div className="homeSection">
      <Navbar />
      <h1 className="headline">
        A <strong>Haven</strong>
        Of The Best
        <strong> Footwear</strong>
      </h1>
    </div>
  );
};

export default Home;
