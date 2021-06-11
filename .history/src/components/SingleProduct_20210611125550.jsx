import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./NavItems/Navbar-Dark";
import { ProductsContext } from "../context/products-context";
import "../Sass/SingleProduct.scss";
import Image from "react-bootstrap/Image";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setproduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    if (!product) {
      return push("/Shop");
    }

    setproduct(product);
  });

  if (!product) {
    return null;
  }
  const { image, shoeName, price, color, category } = product;
  return (
    <div className="detailPage">
      <Navbar />

      <div className="singleProduct">
        <div className="productImage">
          <Image class="productImg" src={`/${image}`} alt="image" fluid />
        </div>

        <div className="product-detailsWrapper">
          <div className="product-details">
            <div className="shoeTitle">{shoeName}</div>
            <div className="shoePrice">{price}</div>
            <div>{color}</div>
            <div>Pick a size</div>
          </div>
          <div className="product-buttons">
          <button className="cartbtn">Add to cart</button>
          <button className="proceedbtn">Proceed to checkout</button>
        </div>
        </div>
    

 
      </div>
    </div>
  );
};

export default withRouter(SingleProduct);
