import React from 'react'
import { withRouter } from 'react-router-dom'

const Total = ({ itemCount, total, history}) => {
  return (
    <div className="total-container">
<div className="total">Subtotal: {itemCount}</div>
<div>{`Total: ${total}`}</div>

<button className="checkoutButton" >Proceed to Checkout</button>

</div>

  );
}

export default withRouter(Total);