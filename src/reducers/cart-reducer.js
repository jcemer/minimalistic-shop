import _get from 'lodash/get'
import { CART_ITEM_ADD, CHECKOUT } from '../action-types'

const initialState = {
  purchased: false,
  items: {}
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
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

    case CHECKOUT:
      return {
        ...state,
        purchased: true,
        items: {}
      }

    default:
      return state
  }
}

export default cartReducer
