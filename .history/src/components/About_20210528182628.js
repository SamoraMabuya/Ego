import React from "react";
import Navbar from "./Navbar";
import "../Sass/about.scss";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="AboutHeadline">
        A <strong> Perfect </strong> Fit For <strong> All </strong>{" "}
      </div>
    </div>
  );
};

export default About;
