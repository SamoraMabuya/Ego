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
    <>
     <Navbar/>
     {details.map(product => (
        <div className="details" key={product.id}>
          <div className="img-container"
          style={{ backgroundImage: `url(${product.images[0]})` }}/>
        </div>
     ))
        })
</>


  )}

