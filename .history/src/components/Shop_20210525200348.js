import React from "react";
import "../Sass/Shop.scss";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import blueheels from "../assets/Shoes/holding blue high heels.png";
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png";
import displaySneakers from "../assets/Shoes/sneakers on display.png";
import Image from "react-bootstrap/Image";
import ProductItems from "./ProductItems";
import whiteAir from "../assets/Shoes/whieAir.png";
import sideBrownSneakers from "../assets/Shoes/main hero shoe side shot.png";
import blueNike from "../assets/Shoes/blueNike.png";
import limeGreenSports from "../assets/Shoes/limegreenshoes.png";
import lightGreenShoes from "../assets/Shoes/lightgreensport.png";
const Shop = () => {
  const ShoeLabel = (props) => {
    return <span className="ShoeLabel">{props.label}</span>;
  };
  const Price = (props) => {
    return <span className="Price">{props.cost}</span>;
  };

  const Color = (props) => {
    return <span className="colorTag">{props.color}</span>;
  };

  const FilterHeading = (props) => {
    return <span className="filterheading">{props.filterheading}</span>;
  };

  return (
    <div className="shopSection">
      <Image className="blueheels" src={blueheels} alt="blueheels" fluid />

      <Navbar />

      <div className="shopSecondPart">
        <div className="shopContainer">
          <ul className="shop-gridcontainer">
            <li className="shop-gridColumn">
              <div className="shopHeadline">
                We Make <strong>Them </strong>
                So
                <br />
                You Can Feel <strong>Confident</strong>
              </div>
            </li>
            <li className="shop-gridColumn">
              <Image
                className="blueSneakers"
                src={blueNikeSneakers}
                alt="blueSneakers"
                fluid
              />
            </li>
            <li>
              <Image
                className="displaySneakers"
                src={displaySneakers}
                alt="displaySneakers"
                fluid
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="shop-productsSection">
        <ul className="filterList">
          <li>All</li>
          <li>Sneakers</li>
          <li>Heels</li>
        </ul>
        <div className="FilterHeading">Sneakers</div>
        <FilterHeading filterheading="Sneakers" />

        <ul className="shoeItemContainer">
          <li className="shoeItem">
            <Image className="whiteAir" src={whiteAir} alt="whiteAir" />
            <div className="darkBanner">
              <ShoeLabel label="Air Nike Sneakers" />
              <Price cost="R1000.00" />
              <Color color="White" />
            </div>
          </li>

          <li className="shoeItem">
            <Image
              className="sideBrownSneakers"
              src={sideBrownSneakers}
              alt="sideBrownSneakers"
            />
            <div className="darkBanner">
              <ShoeLabel label="Ego Den Sneakers" />
              <Price cost="R1000.00" />
              <Color color="Clear Brown" />
            </div>
          </li>

          <li className="shoeItem">
            <Image className="blueNike" src={blueNike} alt="blueNike" />
            <div className="darkBanner">
              <ShoeLabel label="Air Blue High Sneakers" />
              <Price cost="R1000.00" />
              <Color color="Sky Blue" />
            </div>
          </li>

          <li className="shoeItem">
            <Image
              className="limeGreenSports"
              src={limeGreenSports}
              alt="limeGreenSports"
            />
            <div className="darkBanner">
              <ShoeLabel label="Green Running Nike" />
              <Price cost="R1000.00" />
              <Color color="Golden Green" />
            </div>
          </li>

          <li className="shoeItem">
            <Image
              className="lightGreenShoes"
              src={lightGreenShoes}
              alt="lightGreenShoes"
            />
            <div className="darkBanner">
              <ShoeLabel label="Light Green Nike" />
              <Price cost="R1000.00" />
              <Color color="Light Green" />
            </div>
          </li>
        </ul>
      </div>

      <FilterHeading filterheading="Heels"/>

    </div>
  );
};

export default Shop;
