import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ _id, image, price, addToCart }) {
  return (
    <div className='ui card'>
      <Link className='image' to={`/product/${_id}`}>
        <img src={image} alt={`Product ${_id}`} />
      </Link>
      <div className='content'>
        <div>Price {price}</div>
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <button className='ui green button' onClick={() => addToCart(_id)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

ProductItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
}
