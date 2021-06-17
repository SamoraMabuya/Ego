import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../NavItems/Navbar";


import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <div>

    </div>
    <div className="cartpage">
      
      <NavbarDark className="nav"/>
      {/* <CartItems/> */}
    </div>

  )

}
export default CartPage;

