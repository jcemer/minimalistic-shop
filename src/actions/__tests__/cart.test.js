import { addToCart } from '../cart'

describe('addToCart', () => {
  const _id = '123'
  const addToCartId = addToCart(_id)

  it('should call dispatch with ADD_TO_CART when there is stock', () => {
    const dispatch = jest.fn()
    const items = [{ _id, image: 'url', stock: { remaining: 2 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: { _id, image: 'url' }
    })
  })

  it('should call dispatch with ADD_TO_CART and error when there is no stock', () => {
    const dispatch = jest.fn()
    const items = [{ _id, image: 'url', stock: { remaining: 0 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: expect.any(Error),
      error: true
    })
  })
})
