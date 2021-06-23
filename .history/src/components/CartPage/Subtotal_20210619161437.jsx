import React from 'react'
import { withRouter } from 'react-router-dom'

const Total = ({ itemCount, total}) => {
  return (
    <div className="total-container">
<div className="total">Subtotal: {itemCount}</div>
<div>`Total:` ${total}</div>
</div>
  )
}

export default Total;