import React from "react";
import Navbar from "./Navbar";
import "../Sass/about.scss";

const About = (props) => {
  const AboutContent = (props) => {
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
      

      <AboutContent aboutsection="Been in this business for almost 70 decades, Ryde know its customers needs to the T. From the day this brand was born, we have always aspired to be a beacon of inspiration for all men and women. "/>
      <AboutContent aboutsection="In the 70 years of its existence, Ryde has spread its influence to over 120 stores world-wide. We design our shoes to inspire confidence in people of all ages."/>
      <AboutContent aboutsection="Been in this business for almost 70 decades, Ryde know its customers needs to the T. From the day this brand was born, we have always aspired to be a beacon of inspiration for all men and women. "/>




    </div>
  );
};

export default About;
