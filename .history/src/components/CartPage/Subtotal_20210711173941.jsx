import React from "react";
import { withRouter } from "react-router-dom";

const Total = ({ itemCount, total, history }) => {
  return (
    <div>
      <div className="total-container">
        <div className="totalItems">Total items: {itemCount}</div>
        <div className="Subtotal">{`Subtotal: R${total}.00`}</div>
      </div>
      <div className="checkoutButtonWrapper">
        <button
          className="checkoutButton"
          onClick={() => history.push("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default withRouter(Total);
