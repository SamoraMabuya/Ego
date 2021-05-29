import React from "react";
import Navbar from "./Navbar";
import "../Sass/about.scss";

import Image from "react-bootstrap/Image";
import holdingblackheels from "../assets/Shoes/holding black heels.png";
import darkblueStellions from "../assets/Shoes/Stellion Kree Heels.png";
import mainSneakersDisplay from "../assets/Shoes/sneakers on display.png";

const About = (props) => {
  const AboutContent = (props) => {
    return <div className="aboutContent">{props.aboutsection}</div>;
  };
  return (
    <div>
      <Navbar />
      <div className="AboutHeadline">
        A <strong> Perfect </strong> Fit For <strong> All </strong>{" "}
      </div>

      <div class="aboutcontainer">
        <div class="aboutgrid">
          <div class="column">
            <Image
              className="holdingblackheels"
              src={holdingblackheels}
              alt="holdingblackheels"
            />
          </div>
          <div class="column">
            <AboutContent aboutsection="Been in this business for almost 70 decades, Ryde know its customers needs to the T. From the day this brand was born, we have always aspired to be a beacon of inspiration for all men and women. " />
            <AboutContent aboutsection="In the 70 years of its existence, Ryde has spread its influence to over 120 stores world-wide. We design our shoes to inspire confidence in people of all ages." />
            <AboutContent aboutsection="Our shoes are made in all sizes, with the utmost care. At Ryde you will never feel unwelcomed. We can only promise you satification." />
          </div>
          <div class="column">
            <Image
              className="darkblueStellions"
              src={darkblueStellions}
              alt="darkblueStellions"
            />
          </div>
          <div class="column">
            <Image
              className="mainSneakersDisplay"
              src={mainSneakersDisplay}
              alt="mainSneakersDisplay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
