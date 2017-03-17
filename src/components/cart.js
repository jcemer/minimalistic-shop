import React, { PropTypes } from 'react'
import _map from 'lodash/map'
import _isEmpty from 'lodash/isEmpty'

import CartItem from './cart-item'

export default function Cart({ purchased, items, checkout }) {
  if (purchased) {
    return (
      <div className="ui message green">Well done. Thank you!</div>
    )
  }

  if (_isEmpty(items)) {
    return (
      <div className="ui message yellow">It's empty. Let's shop!</div>
    )
  }

  return (
    <div>
      <div className="ui unstackable divided items">
        {_map(items, item => <CartItem key={item._id} {...item} />)}
      </div>
      <button className="ui button fluid blue" onClick={checkout}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  purchased: PropTypes.bool,
  items: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  checkout: PropTypes.func.isRequired
}
