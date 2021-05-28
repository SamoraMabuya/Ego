import React from "react";
import Navbar from "./Navbar";
import "../Sass/about.scss";

const About = (props) => {
  const aboutContent = (props) => {
    return <div className="aboutContent">{props.aboutsection}</div>
  }
  return (
    <div>
      <Navbar />
      <center>
        <div className="AboutHeadline">
          A <strong> Perfect </strong> Fit For <strong> All </strong>{" "}
        </div>
      </center>
      

      <div aboutContent aboutsection="ss"/>




      </s>
    </div>
  );
};

export default About;
