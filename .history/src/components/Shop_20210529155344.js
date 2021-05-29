import React, { useState } from "react";
import "../Sass/Shop.scss";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import blueheels from "../assets/Shoes/holding blue high heels.png";
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png";
import displaySneakers from "../assets/Shoes/sneakers on display.png";
import Image from "react-bootstrap/Image";
import whiteAir from "../assets/Shoes/whieAir.png";
import sideBrownSneakers from "../assets/Shoes/main hero shoe side shot.png";
import blueNike from "../assets/Shoes/blueNike.png";
import limeGreenSports from "../assets/Shoes/limegreenshoes.png";
import lightGreenShoes from "../assets/Shoes/lightgreensport.png";

import flowerLovernBoots from "../assets/Shoes/stellion boots.png";
import LeopardLetherHeels from "../assets/Shoes/black heels.png";
import StellionKreeHeels from "../assets/Shoes/Stellion Kree Heels.png";
import FlowerForms from "../assets/Shoes/flower Heels.png";
import BeigeFormHeels from "../assets/Shoes/Beige Form Heels.png";

import ShopFooter from "./Footers/ShopFooter";
import productItems from "./ProductItems";

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

  const [shoeItems, setShoeItems] = useState(productItems);

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

        <FilterHeading filterheading="Sneakers" />

        {shoeItems.map((shoeProduct) => {
          const { id, image, shoeName, price, color, category } = shoeProduct;
          return (
            <div className="wrapper-grid">
              <div className=".shop-productsSection">
                <div className="shoeItemContainer">
                  <div className="shoeItem">
                    <img className=".blueNike" src={image} alt={shoeName} fluid />
                    <div className="darkBanner">
                      <ShoeLabel label={shoeName} />
                      <Price cost={price} />
                      <Color color={color} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Heels section  */}

              {/* <FilterHeading filterheading="Heels" /> */}
            </div>
          );
        })}
      </div>

      <ShopFooter />
    </div>
  );
};

export default Shop;
