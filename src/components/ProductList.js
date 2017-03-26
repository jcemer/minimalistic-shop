import React, { PropTypes } from 'react'

import ProductItem from './ProductItem'

const ProductList = ({ items, addToCart }) => {
  return (
    <div className="ui five column doubling cards">
      {items.map(item => <ProductItem key={item._id} addToCart={addToCart} {...item} />)}
    </div>
  )
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductList
