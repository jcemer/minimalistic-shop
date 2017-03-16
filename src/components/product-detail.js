import React, { PropTypes } from 'react'

export default function ProductDetail({ _id, image, price, description, stock }) {
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
}
