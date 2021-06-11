import React from "react";
import "../../Sass/cart.scss";
import CartContext from '../../context/cart-context'
const Cart = () => {
  const {itemCount} = useContent(CartContext)
  return (
    <div>
      <span className="cartItems"> Cart:</span>
      {
        itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null 
      }
    </div>
  );
};

export default Cart;
