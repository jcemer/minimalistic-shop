import _get from 'lodash/get'

export default function cartReducer(state = { items: {} }, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { _id, image } = action.product
      const quantity = _get(state.items[_id], 'quantity', 0) + 1

      return {
        ...state,
        items: {
          ...state.items,
          [_id]: { _id, image, quantity }
        }
      }

    default:
      return state
  }
}
