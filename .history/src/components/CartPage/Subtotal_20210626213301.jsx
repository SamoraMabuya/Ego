import React from "react";
import { withRouter } from "react-router-dom";

const Total = ({ itemCount, total, history }) => {
  return (
    <div className="total-container">
      <div className="totalItems">Total items: {itemCount}</div>
      <div className="Subtotal">{`Subtotal: $${total}`}</div>

      {/* <button className="checkoutButton" onClick={() => history.push('/checkout')}>Proceed to Checkout</button> */}
    </div>
  );
};

export default withRouter(Total);
