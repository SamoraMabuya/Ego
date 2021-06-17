import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../NavItems/Navbar";
import NavbarDark from "../NavItems/Navbar-Dark";


import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="cartpage">
      
      <NavbarDark className="nav"/>
      {/* <CartItems/> */}
    </div>
        </div>


  )

}
export default CartPage;

