import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import NavbarDark from "../NavItems/Navbar-Dark";

import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <NavbarDark/>
    <div className="cartpage">
      
      <NavbarDark className="nav"/>
      {/* <CartItems/> */}
    </div>

  )

}
export default CartPage;

