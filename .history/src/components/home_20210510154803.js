import React from "react";
import "../Sass/home.scss";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <div className="homeSection">
      <Navbar />
      <H1 className="headline">
        A <strong>Haven </strong>
          Of The Best
        <strong> Footwear</strong>
      </H1>
    </div>
  );
};

export default Home;
