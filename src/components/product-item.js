import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ _id, image, price }) {
  return (
    <Link className='ui card' to={`/product/${_id}`}>
      <div className='image'>
        <img src={image} alt={`Product ${_id}`} />
      </div>
      <div className='extra content'>
        <div>Price {price}</div>
      </div>
    </Link>
  )
}

ProductItem.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
