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

  const CartButton = (props) => {
    return <button class="cartButtons">{props.cartbutton}</button>
  };
  const { image, shoeName, price, color } = product;
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
            <CartButton cartbutton="+ Add to Cart"/>          
            <CartButton cartbutton="Proceed to Checkout"/>
        </div>
        </div>
    

 
      </div>
    </div>
  );
};

export default withRouter(SingleProduct);
