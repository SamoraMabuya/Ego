import React, { useContext } from "react";
import NavbarDark from '../NavItems/Navbar-Dark'
import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";


const CartPage = () => {
  return (
    <div className="cartpage">
      
      <NavbarDark/>
      {/* <CartItems/> */}
    </div>

  )

}
export default CartPage;

