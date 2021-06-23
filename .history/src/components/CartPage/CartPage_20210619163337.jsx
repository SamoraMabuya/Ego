import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import NavbarDark from "../NavItems/NavbarDark";
import Total from "./Subtotal";

import CartItems from "./CartItems";

import "./CartPage.scss";
import { CartContext } from "../../context/cart-context";

const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <div className="cartSection">
      <NavbarDark />
      {cartItems.length === 0 ? (
        <div className="emptyCart">Your Cart is Empty </div>
      ) : (
        <>
          <hr className="line" />
          {cartItems.map((item) => (
            <CartItems {...item} key={item.id} />
          ))}

          <hr className="linetwo" />

          <div className="total-container">
            <Total itemCount={itemCount} total={total} />
          </div>
          <button className="checkoutButton" onClick={() => history.push('/checkout')}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};
export default CartPage;
