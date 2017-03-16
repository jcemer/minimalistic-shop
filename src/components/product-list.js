import React, { PropTypes } from 'react'

import ProductItem from './product-item'

export default function ProductList({ items }) {
  return (
    <div className="ui five column doubling cards">
      {items.map(item =>
        <ProductItem key={item._id} {...item} />)}
    </div>
  )
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
