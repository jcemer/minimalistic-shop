import React, { PropTypes } from 'react'

const CartItem = ({ _id, image, quantity }) => {
  return (
    <div className="ui item">
      <div className="ui tiny image">
        <img src={image} alt={`Product ${_id}`} />
      </div>
      <div className="middle aligned content">
        <div className="ui tiny header">Product {_id}</div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default CartItem
