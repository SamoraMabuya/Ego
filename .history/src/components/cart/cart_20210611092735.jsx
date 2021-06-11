import React from "react";
import "../../Sass/cart.scss";
import CartContext from '../../context/cart-context'
const Cart = () => {
  const {itemCount} = useContent(cartContext)
  return (
    <div>
      <span className="cartItems"> Cart:</span>
    </div>
  );
};

export default Cart;
