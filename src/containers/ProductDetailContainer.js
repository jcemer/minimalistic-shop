import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _find from 'lodash/find'

import { addToCart } from '../actions/cart'
import ProductDetail from '../components/ProductDetail'

export const ProductDetailContainer = ({ isReady, item, addToCart }) => {
  if (!isReady) return null
  if (!item) return <span>Product not found</span>

  return (
    <div className="ui container">
      <div className="ui breadcrumb">
        <Link className="section" to='/'>Home</Link>
        <i className="right angle icon divider"></i>
        <div className="active section">Product</div>
      </div>
      <ProductDetail addToCart={addToCart} {...item} />
    </div>
  )
}

export const mapStateToProps = (
  { products: { isReady, items } },
  { match: { params: { _id } } }
) => {
  if (!isReady) return { isReady: false, item: undefined }
  return { isReady, item: _find(items, { _id }) }
}

export default connect(mapStateToProps, { addToCart })(ProductDetailContainer)
