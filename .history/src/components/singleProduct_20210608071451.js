import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import {ProductContext} from "./ProductItems";
import Image from "react-bootstrap/Image";


const SingleProduct = ({ match, history: {push}}) => {
  const { products } = useContext(ProductContext);
  const {id } match.params;
  const [product, setproduct] = useState(null);

  useEffect(() => {
    const product = products.find(item => Number(item,id) === Number(id));

    if(!product) {
      return push('./Shop');
    }

    setproduct(product)
  });

  const {image, shoeName, price, color, category} = product;
  return (
    <div>
        </Navbar>
    
        // <div>
        // <img src={image} alt="product" />
        // </div>


    </div>
  )
}
    
    

  

