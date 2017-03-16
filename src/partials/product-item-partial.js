import React from 'react'
import { connect } from 'react-redux'

import ProductDetail from '../components/product-detail'
import { Link } from 'react-router-dom'

export function ProductItemPartial({ isReady, item }) {
  if (!isReady) return null
  if (!item) return <span>Product not found</span>

  return (
    <div className="ui container">
      <div className="ui breadcrumb">
        <Link className="section" to='/'>Home</Link>
        <i className="right angle icon divider"></i>
        <div className="active section">Product</div>
      </div>
      <ProductDetail {...item} />
    </div>
  )
}

export const mapStateToProps = (
  { products: { isReady, items } },
  { match: { params: { _id } } }
) => {
  if (!isReady) return { isReady: false, item: undefined }
  const item = items.find((item) => item._id === _id)
  return { isReady, item }
}

export default connect(mapStateToProps)(ProductItemPartial)
