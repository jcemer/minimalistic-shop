import _find from 'lodash/find'
import _unionBy from 'lodash/unionBy'

export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        isPending: true,
      }

    case 'FETCH_PRODUCTS_FULFILLED':
      return {
        isReady: true,
        items: action.payload,
      }

    case 'ADD_TO_CART':
      const item = _find(state.items, action.product)
      return {
        ...state,
        items: _unionBy(
          [{ ...item, stock: { remaining: item.stock.remaining - 1 } }],
          state.items,
          '_id'
        )
      }

    default:
      return state
  }
}
