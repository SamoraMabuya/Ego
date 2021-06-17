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
      <ul className="item-details">
        <li className="shoeName">{shoeName} ShoeName</li>
        <li className="price">{price}price</li>
        <li className="color">color:{color}</li>
      </ul>

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
