import React, { useState } from "react";
import "../Sass/Shop.scss";
import Navbar from "./Navbar";
import blueheels from "../assets/Shoes/holding blue high heels.png";
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png";
import displaySneakers from "../assets/Shoes/sneakers on display.png";
import Image from "react-bootstrap/Image";



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


  const filterType = (shoeType) => {
    const itemUpdate = productItems.filter((showShoeType) => {
      return showShoeType.category = shoeType
    })

    setShoeItems(itemUpdate)
  }

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
          <button onClick={() => setShoeItems(productItems)}>All</button>
          <button onClick={() => filterType('Sneakers')}>Sneakers</button>
          <button onClick={() =>filterType('Heels')}>Heels</button>
        </ul>

        <FilterHeading filterheading="Sneakers" />

        <div className="wrapper-grid">
          {shoeItems.map((shoeProduct) => {
            const { id, image, shoeName, price, color, category, cname } = shoeProduct;
            return (
              <div className="shoeItemContainer" key={id}>
                <div className="shoeItem">
                  <Image className={cname} src={image} alt={shoeName} fluid />
                  <div className="darkBanner">
                    <ShoeLabel label={shoeName} />
                    <Price cost={price} />
                    <Color color={color} />
                  </div>
                </div>
              </div>

              // {/* Heels section  */}

              // {/* <FilterHeading filterheading="Heels" /> */}
            );
          })}
        </div>
      </div>

      <ShopFooter />
    </div>
  );
};

export default Shop;
