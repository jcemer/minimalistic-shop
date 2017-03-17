import React, { PropTypes } from 'react'

import AddToCartButton from './add-to-cart-button'

export default function ProductDetail({ _id, image, price, description, stock, addToCart }) {
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={image} alt={`Product ${_id}`} />
        </div>
        <div className="content">
          <div className="header">Product {_id}</div>
          <div className="meta">
            Price {price}
          </div>
          <div className="description">
            Description: {description}
          </div>
          <div className="extra">
            Remaining stock: {stock.remaining} item(s)
          </div>
          <div className="extra">
            <AddToCartButton _id={_id} stock={stock} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.shape({
    remaining: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}
