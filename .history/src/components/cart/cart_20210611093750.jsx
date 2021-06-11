import React, {useContext} from "react";
import "../../Sass/cart.scss";
import { CartContext } from '../../context/cart-context'
const Cart = () => {
  const { itemCount } = useContext(CartContext)
  return (
    <div>
      <span className="cartItems"> Cart:</span>
      {
        itemCount > 0 ? <span className="cart-count">{itemCount}</span> : <span>00</span> 
      }
    </div>
  );
};

export default Cart;
