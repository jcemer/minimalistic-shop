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

    default:
      return state
  }
}
