import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import NavbarDark from '../NavItems/NavbarDark'


import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <div className="cartSection">
      <div className="itemBox">
      <NavbarDark/>
      <CartItems/>
      <div className="total">Subtotal: R340.00</div>
      </div>

    </div>


  )

}
export default CartPage;

