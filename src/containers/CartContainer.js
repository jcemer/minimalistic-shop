import React from 'react'
import { connect } from 'react-redux'

import { checkout } from '../actions/cart'
import Cart from '../components/Cart'

export const CartContainer = (props) => {
  return (
    <div>
      <div className="ui header">Shopping Cart</div>
      <Cart {...props} />
    </div>
  )
}

export const mapStateToProps = (
  { cart: { purchased, items } }
) => ({ purchased, items })

export default connect(mapStateToProps, { checkout })(CartContainer)
