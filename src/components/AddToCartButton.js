import React, { PropTypes } from 'react'
import classnames from 'classnames'

 const AddToCartButton = ({ _id, stock, addToCart, fluid }) => {
  const disabled = stock.remaining <= 0
  const className = classnames('ui green button', { disabled, fluid })

  return (
    <button className={className} disabled={disabled} onClick={() => !disabled && addToCart(_id)}>
      Add to cart
    </button>
  )
}

AddToCartButton.propTypes = {
  _id: PropTypes.string.isRequired,
  stock: PropTypes.shape({
    remaining: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default AddToCartButton
