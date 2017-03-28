import { createAction } from 'redux-actions'
import _find from 'lodash/find'
import _get from 'lodash/get'

import { CART_ITEM_ADD, CHECKOUT } from '../action-types'

export const addToCart = _id => (dispatch, getState) => {
  const product = _find(getState().products.items, { _id })

  dispatch(createAction(CART_ITEM_ADD, () => {
    if (_get(product, 'stock.remaining', 0) <= 0) {
      return new Error('There are not reminaing stock.')
    }

    return { _id, image: product.image }
  })())
}

export const checkout = createAction(CHECKOUT)
