import React, { useContext } from "react";
import Navbar from "./NavItems/Navbar-Dark";
import "./CartPage.scss";
import CartItems from "./CartItems";
import { CartContext } from "../../context/cart-context";

const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);

  return (
    <div className="cartpage">
      <Navbar />
      <CartItems />
    </div>
  );
};

export default Navbar;
