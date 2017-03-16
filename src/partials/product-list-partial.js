import React from 'react'
import { connect } from 'react-redux'

import ProductList from '../components/product-list'

export function ProductListPartial({ isReady, items }){
  if (!isReady) return null

  return <ProductList items={items} />
}

export const mapStateToProps = (
  { products: { isReady, items } }
) => ({ isReady, items })

export default connect(mapStateToProps)(ProductListPartial)
