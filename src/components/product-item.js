import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import AddToCartButton from './add-to-cart-button'

export default function ProductItem({ _id, image, price, stock, addToCart }) {
  return (
    <div className="ui card">
      <Link className="ui image" to={`/product/${_id}`}>
        <img src={image} alt={`Product ${_id}`} />
      </Link>
      <div className="content">
        <div>Price {price}</div>
      </div>
      <div className="extra content">
        <AddToCartButton fluid _id={_id} stock={stock} addToCart={addToCart} />
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stock: PropTypes.shape({
    remaining: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}
