import React from "react";
import Image from "react-bootstrap/Image";
import shoe from "../../assets/Shoes/main hero shoe.png";

const CartItems = (product) => {
  const { image, shoeName, price, color, quantity } = product;

  return (
    <div className="cart-item">
      <div className="item-container">
        <Image className="product-image" src={shoe} alt="product" />
      </div>
      <div className="item-details">
        <div className="shoeName">{shoeName} ShoeName</div>
        <div>{price}</div>
        <div>color{color}</div>
      </div>

      <div className="buttons">
        <button className="add-button">Add</button>

        {quantity === 1 && <button className="remove-button">Remove</button>}
        {quantity > 1 && <button className="remove-button"> - Remove </button>}
      </div>

      <div className="quantity-container">
        <div className="quantity">Quantity</div>
      </div>
    </div>
  );
};

export default CartItems;
