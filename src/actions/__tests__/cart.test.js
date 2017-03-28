import { addToCart } from '../cart'
import { CART_ITEM_ADD } from '../../action-types'

describe('addToCart', () => {
  const _id = '123'
  const addToCartId = addToCart(_id)

  it('should call dispatch with CART_ITEM_ADD when there is stock', () => {
    const dispatch = jest.fn()
    const items = [{ _id, image: 'url', stock: { remaining: 2 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).toHaveBeenCalledWith({
      type: CART_ITEM_ADD,
      payload: { _id, image: 'url' }
    })
  })

  it('should call dispatch with CART_ITEM_ADD and error when there is no stock', () => {
    const dispatch = jest.fn()
    const items = [{ _id, image: 'url', stock: { remaining: 0 } }]

    addToCartId(dispatch, () => ({ products: { items } }))

    expect(dispatch).toHaveBeenCalledWith({
      type: CART_ITEM_ADD,
      payload: expect.any(Error),
      error: true
    })
  })
})
