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


  const Button = (props) => {
    return <Button class="cartButtons">{props.cartbutton}</Button>
  };

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
          <ul className="product-details">
            <li className="shoeTitle">{shoeName}</li>
            <li className="shoePrice">{price}</li>
            <li className="shoeColor">{color}</li>
            <li className="PickSize">Pick a size</li>
          </ul>
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
