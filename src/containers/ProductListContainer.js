import React from 'react'
import { connect } from 'react-redux'

import { addToCart } from '../actions/cart'
import ProductList from '../components/ProductList'

export const ProductListContainer = ({ isReady, items, addToCart }) => {
  if (!isReady) return null

  return <ProductList addToCart={addToCart} items={items} />
}

export const mapStateToProps = (
  { products: { isReady, items } }
) => ({ isReady, items })

export default connect(mapStateToProps, { addToCart })(ProductListContainer)
