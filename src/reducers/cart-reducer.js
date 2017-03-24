import _get from 'lodash/get'

const initialState = {
  purchased: false,
  items: {}
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { _id, image } = action.product
      const quantity = _get(state.items[_id], 'quantity', 0) + 1

      return {
        ...state,
        purchased: false,
        items: {
          ...state.items,
          [_id]: { _id, image, quantity }
        }
      }

    case 'CHECKOUT':
      return {
        ...state,
        purchased: true,
        items: {}
      }

    default:
      return state
  }
}
