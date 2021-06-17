import React from 'react'
import Image from "react-bootstrap/Image";



const CartItems = (product) => {

  const { image, shoeName, price, color, quantity } = product;

  <div className="cart-item">
    <div className="item-container">
      <Image className="product-image" src={image} alt='product'/>
    </div>
    <div className="item-details">
      <div>{shoeName}</div>
      <div>{price}</div>
      <div>color{color}</div>
    </div>

    <div className="buttons">
    <button className="add-button">Add</button>

      {
        quantity === 1 &&
        <button className="remove-button">Remove</button>
      }
      {
        quantity > 1 && 
        <button className="remove-button"> - Remove </button>
      }
    </div>

    <div className="quantity-container">
      <div className='quantity'>Quantity</div>
    </div>


  </div>

  const

}

export default CartItems