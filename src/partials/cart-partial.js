import React from 'react'
import { connect } from 'react-redux'

import Cart from '../components/cart'

export function CartPartial({ items }){
  return (
    <div>
      <div className="ui header">Shopping Cart</div>
      <Cart items={items} />
    </div>
  )
}

export const mapStateToProps = (
  { cart: { items } }
) => ({ items })

export default connect(mapStateToProps)(CartPartial)
