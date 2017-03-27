import _find from 'lodash/find'
import _get from 'lodash/get'

export const addToCart = _id => (dispatch, getState) => {
  const product = _find(getState().products.items, { _id })
  if (_get(product, 'stock.remaining', 0) > 0) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { _id, image: product.image }
    })
  } else {
    dispatch({
      type: 'ADD_TO_CART',
      payload: new Error('There are not reminaing stock.'),
      error: true
    })
  }
}

export const checkout = () => ({
  type: 'CHECKOUT'
})
