import React, { useContext } from "react";
import Navbar from "../NavItems/Navbar-Dark";
import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";

const CartPage = () => {
  // const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <div className="cartpage">
      <Navbar />
      {/* <CartItems /> */}
    </div>
  )
  };

export default CartPage;
