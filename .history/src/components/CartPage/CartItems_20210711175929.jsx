import React from "react";
import Image from "react-bootstrap/Image";

const CartItems = (props) => {
  const {image, shoeName, price, color, quantity, id, increase, decrease, deleteProduct} = props;
  const product = {image, shoeName, price, color, quantity, id};

  return (
    <div className="CartSpace">

      <div className="cart-item">
        <div className="item-container">
          <Image className="product-image" src={image} alt="product" />
        </div>
        <div className="item-details">
          <div className="shoeName">{shoeName}</div>
          <div className="price">{price}</div>
          <div className="color">{color}</div>
        </div>

        <div className="buttons">
          <button className="add-button" onClick={() => increase(product)}>Add</button>

          {quantity === 1 && <button className="remove-button" onClick={() => deleteProduct(product)}>Remove</button>}
          {quantity > 1 && (
            <button className="remove-button" onClick={() => decrease(product)}> - Remove </button>
          )}
        </div>
      </div>
      <div className="quantity-container">
        <div className="quantity">{`Quantity: ${quantity}`}</div>
      </div>
    </div>
  );
};

export default CartItems;
