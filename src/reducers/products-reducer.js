import { handleActions } from 'redux-actions'

import { PRODUCTS_FETCH, CART_ITEM_ADD } from '../action-types'

const initialState = {
  isPending: false,
  isReady: false,
  items: []
}

const productsReducer = handleActions({
  [PRODUCTS_FETCH.PENDING]: state => ({
    ...state,
    isPending: true,
    isReady: false,
    items: []
  }),

  [PRODUCTS_FETCH.FULFILLED]: (state, { payload }) => ({
    ...state,
    isPending: false,
    isReady: true,
    items: payload,
  }),

  [CART_ITEM_ADD]: (state, { payload: { _id } }) => ({
    ...state,
    items: state.items.map(item =>
      item._id !== _id ? item :
        { ...item, stock: { remaining: item.stock.remaining - 1 } }
    )
  })
}, initialState)

export default productsReducer
