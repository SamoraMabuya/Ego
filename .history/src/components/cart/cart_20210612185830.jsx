import React, {useContext} from "react";
import "../../Sass/cart.scss";
import { CartContext } from '../../context/cart-context'
const Cart = () => {

  const Zero = (props) => {
    return <span className="zeroItems"> {props.zero}</span>
  }
  const { itemCount, cartItems } = useContext(CartContext)
  console.log('CartItems', cartItems)
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
