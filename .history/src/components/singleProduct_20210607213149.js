import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../Sass/Shop.scss";
import {ProductContext} from "./ProductItems";


export default function Details() { 
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(details);

  return (

    <div>
             <Navbar/>
             <div>
             {shoeItems.map((shoeProduct) => {
            const { id, image, shoeName, price, color, cname } = shoeProduct;
            return (
              <div className="shoeItemContainer" key={id}>
                <div className="shoeItem">
                  <Image className={cname} src={image} alt={shoeName} fluid />
                  <div className="darkBanner">
                    <ShoeLabel label={shoeName} /> <Price cost={price} />{" "}
                    <Color color={color} />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
              
    
    
    

  

