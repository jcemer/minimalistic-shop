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
      const { _id } = action.product
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
