import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import NavbarDark from '../NavItems/NavbarDark'


import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <div className="cartSection">
      <NavbarDark/>
      <hr className="line" />
      {
        CartItems.length === 0 ? 
        <div className="emptyCart">
          Your Cart is Empty   </div>
          :
          <>
          

          </>
      }
      
      <hr className="linetwo" />

      <div className="total-container">
      <div className="total">Subtotal: R340.00</div>
      </div>
      <button className="checkoutButton">Proceed to Checkout</button>
    </div>


  )

}
export default CartPage;

