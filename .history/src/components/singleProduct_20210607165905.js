import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../Sass/Shop.scss";
import productItems from "./ProductItems";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useConte(productItems);

  const product_details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(product_details);

  return (
    <div>
      {product_details.map(product => (
        <div className="details" key={product.id}>
          <div className="img-container">
            <h3>${product.shoeName}</h3>
          </div>
        </div>;
      })}
    </div>
  );
};

export default SingleProduct;
