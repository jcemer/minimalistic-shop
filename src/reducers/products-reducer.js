import { PRODUCTS_FETCH, CART_ITEM_ADD } from '../action-types'

const initialState = {
  isPending: false,
  isReady: false,
  items: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH.PENDING:
      return {
        ...state,
        isPending: true,
        isReady: false,
        items: []
      }

    case PRODUCTS_FETCH.FULFILLED:
      return {
        ...state,
        isPending: false,
        isReady: true,
        items: action.payload,
      }

    case CART_ITEM_ADD:
      const { _id } = action.payload
      return {
        ...state,
        items: state.items.map(item =>
          item._id !== _id ? item :
            { ...item, stock: { remaining: item.stock.remaining - 1 } }
        )
      }

    default:
      return state
  }
}

export default productsReducer
