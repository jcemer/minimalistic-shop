import { handleActions } from 'redux-actions'
import _get from 'lodash/get'

import { CART_ITEM_ADD, CHECKOUT } from '../action-types'

const initialState = {
  purchased: false,
  items: {}
}

const cartReducer = handleActions({
  [CART_ITEM_ADD]: (state, action) => {
    const { _id, image } = action.payload
    const quantity = _get(state.items[_id], 'quantity', 0) + 1

    return {
      ...state,
      purchased: false,
      items: {
        ...state.items,
        [_id]: { _id, image, quantity }
      }
    }
  },

  [CHECKOUT]: state => ({
    ...state,
    purchased: true,
    items: {}
  })
}, initialState)

export default cartReducer
