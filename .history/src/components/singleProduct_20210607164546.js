import React, { useContext, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import "../Sass/Shop.scss";
import productItems from "./ProductItems";

const SingleProduct = () => {
  const {id} = useParams();
  const [products, setProducts] = useConte(productItems);

  const product_details = products.filter((product, index) => {
    return product.id ===id
  })

  console.log(product_details)

  return (
    <>
      {/* <Navbar /> */}
      {
      {product_details.map( => )
        <div className="shoeImage"
        style={{background: `url(${product.image[0]})`}}>
          <h2>{product.shoeName}</h2>
        </div>
      })

    </div>


export default SingleProduct;
