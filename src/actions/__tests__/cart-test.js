import { addToCart } from '../cart'

describe('addToCart', () => {
  const _id = '123'
  const addToCartId = addToCart(_id)

  it('should call dispatch with ADD_TO_CART when there is stock', () => {
    const dispatch = jasmine.createSpy('spy')
    const items = [{ _id, image: 'url', stock: { remaining: 2 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      product: { _id, image: 'url' }
    })
  })

  it('should do nothing with ADD_TO_CART when there is no stock', () => {
    const dispatch = jasmine.createSpy('spy')
    const items = [{ _id, image: 'url', stock: { remaining: 0 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).not.toHaveBeenCalled()
  })
})
