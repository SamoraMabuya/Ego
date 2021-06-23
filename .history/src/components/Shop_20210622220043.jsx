import React, { useState, useContext } from "react";
import "../Sass/Shop.scss";
import Navbar from "./NavItems/Navbar";
import blueheels from "../assets/Shoes/holding blue high heels.png";
import blueNikeSneakers from "../assets/Shoes/holding nike shoes.png";
import displaySneakers from "../assets/Shoes/sneakers on display.png";
import Image from "react-bootstrap/Image";
import Cart from "./cart/cart";
import ShopFooter from "./Footers/ShopFooter";
import ProductItems from "./ProductItems";
import { ProductsContext } from "../context/products-context";
import { isInCart } from "../helpers";
import { CartContext } from "../context/cart-context";
import { withRouter } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

import { Link } from "react-router-dom";

const Shop = (props) => {

  const {addProduct, cartItems } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const productShoeItems = products.map(shoeProduct => (
    <FeaturedProduct {...shoeProduct} key={shoeProduct.id} />));
  }
  
  

  

  const ShoeLabel = (props) => {
    return <span className="ShoeLabel"> {props.label} </span>;
  };
  const Price = (props) => {
    return <span className="Price"> {props.cost} </span>;
  };

  const Color = (props) => {
    return <span className="colorTag"> {props.color} </span>;
  };

  const FilterHeading = (props) => {
    return <span className="filterheading"> {props.filterheading} </span>;
  };

  const [shoeItems, setShoeItems] = useState(ProductItems);

  const filterType = (shoeCategory) => {
    const updatedShoeItem = ProductItems.filter((currentItem) => {
      return currentItem.category === shoeCategory;
    });

    setShoeItems(updatedShoeItem);
  };

  const [showHeading, setShowHeading] = useState(true);

  const [currentHeading, setcurrentHeading] = useState("Sneakers");

  return (
    <div className="shopSection">
      <Image className="blueheels" src={blueheels} alt="blueheels" fluid />

      <Navbar />

      <div className="shopSecondPart">
        <div className="shopContainer">
          <ul className="shop-gridcontainer">
            <li className="shop-gridColumn">
              <div className="shopHeadline">
                We Make <strong> Them </strong>
                So <br />
                You Can Feel <strong> Confident </strong>{" "}
              </div>{" "}
            </li>{" "}
            <li className="shop-gridColumn">
              <Image
                className="blueSneakers"
                src={blueNikeSneakers}
                alt="blueSneakers"
                fluid
              />
            </li>{" "}
            <li>
              <Image
                className="displaySneakers"
                src={displaySneakers}
                alt="displaySneakers"
                fluid
              />
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>

      <div className="shop-productsSection">
        <div className="shopHeader">
          <div className="filterList">
            <button
              onClick={(change) => {
                setShoeItems(ProductItems);
                setShowHeading(true);
                setcurrentHeading("Sneakers");
              }}
            >
              {" "}
              All{" "}
            </button>{" "}
            <button
              onClick={() => {
                filterType("sneakers");
                setShowHeading(false);
                setcurrentHeading("Sneakers");
              }}
            >
              {" "}
              Sneakers{" "}
            </button>{" "}
            <button
              onClick={() => {
                filterType("heels");
                setShowHeading(false);
                setcurrentHeading("Heels");
              }}
            >
              Heels{" "}
            </button>{" "}
          </div>
          
      <div className="CartCount">
            <Cart />
          </div>
 
        </div>
        <FilterHeading filterheading={currentHeading} />
        <div className={showHeading ? "heelsHeading" : "heelsHeadinghidden"}>
          {" "}
          Heels{" "}
        </div>
        <div className="wrapper-grid">
        
              {
                productShoeItems
              }

            );
        </div>{" "}
      </div>

      <ShopFooter />
    </div>
  );
};

export default withRouter(Shop);
