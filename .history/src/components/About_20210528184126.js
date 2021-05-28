import React from "react";
import Navbar from "./Navbar";
import "../Sass/about.scss";

const About = () => {
  const ShoeLabel = (props) => {
    return <span className="ShoeLabel">{props.label}</span>;
  };
  const aboutContent = (props) => {
    return <div className="aboutContent">{props.aboutpara}</div>
  }
  return (
    <div>
      <Navbar />
      <center>
        <div className="AboutHeadline">
          A <strong> Perfect </strong> Fit For <strong> All </strong>{" "}
        </div>
      </center>

      {/* <aboutContent aboutpara="Been in this business for almost 70 decades, Ryde know its customers needs to the T. From the day this brand was born, we have always aspired to be a beacon of inspiration for all men and women. "/> */}

      <div className="AboutContent">




      </s>
    </div>
  );
};

export default About;
