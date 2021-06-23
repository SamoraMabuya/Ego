import React, {useContext} from "react";
import "../../Sass/cart.scss";
import { CartContext } from '../../context/cart-context'
const Cart = ({history}) => {  const Zero = (props) => {
    return <span className="zeroItems"> {props.zero}</span>
  }
  const { itemCount, cartItems } = useContext(CartContext)
  return (
    <div>
      <span className="cartItems"> Cart:</span>
      {
        itemCount > 1 ? <span className="cart-count"> {itemCount} items</span> 
        : itemCount === 1 ? <span className="cart-count">{itemCount} item</span> 
        :<Zero zero="00"/>
      }

    
    </div>
  );
};

export default Cart;
