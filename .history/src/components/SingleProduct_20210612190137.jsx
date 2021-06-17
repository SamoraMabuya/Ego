import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./NavItems/Navbar-Dark";
import { ProductsContext } from "../context/products-context";
import "../Sass/SingleProduct.scss";
import Image from "react-bootstrap/Image";
import ShoeSizes from "./ShoeSizes";

import { isInCart } from "../helpers";
import { CartContext } from "../context/cart-context";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setproduct] = useState(null);
  const { addProduct, cartItems } = useContext(CartContext);

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
    return <button class="cartButtons">{props.cartbutton}</button>;
  };

  const { image, shoeName, price, color } = product;
  // const { image, shoeName, price, color } = props;
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
          </ul>
          <div className="shoeSizes">
            <ShoeSizes buttons={["9", "10", "11", "12", "13", "14", "15"]} />
          </div>
          <div className="product-buttons">
            {
            
            !isInCart(product, cartItems) && (
              <CartButton
                cartbutton="Add to Cart"
                onClick={() => addProduct(product)}
              ></CartButton>
            )}
            {isInCart(product, cartItems) && 
              <CartButton cartbutton="Add to Cart +" onClick={() => {}} />
            }
            <CartButton cartbutton="Proceed to Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleProduct);
