import _find from 'lodash/find'
import _get from 'lodash/get'

import { CART_ITEM_ADD, CHECKOUT } from '../action-types'

export const addToCart = _id => (dispatch, getState) => {
  const product = _find(getState().products.items, { _id })
  if (_get(product, 'stock.remaining', 0) > 0) {
    dispatch({
      type: CART_ITEM_ADD,
      payload: { _id, image: product.image }
    })
  } else {
    dispatch({
      type: CART_ITEM_ADD,
      payload: new Error('There are not reminaing stock.'),
      error: true
    })
  }
}

export const checkout = () => ({
  type: CHECKOUT
})
