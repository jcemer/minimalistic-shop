import { PRODUCTS_FETCH, CART_ITEM_ADD } from '../../action-types'
import productsReducer from '../products-reducer'

describe('productsReducer', () => {
  it('should returns given state for unrecognized action', () => {
    const givenState = {}
    const state = productsReducer(givenState, { type: 'UNRECOGNIZED' })

    expect(state).toBe(givenState)
  })

  it('should returns isPending for PRODUCTS_FETCH_PENDING', () => {
    const state = productsReducer({}, { type: PRODUCTS_FETCH.PENDING })

    expect(state).toEqual({ isPending: true, isReady: false, items: [] })
  })

  it('should returns isReady and items for PRODUCTS_FETCH_FULFILLED', () => {
    const items = []
    const state = productsReducer({}, { type: PRODUCTS_FETCH.FULFILLED, payload: items })

    expect(state).toEqual({ isPending: false, isReady: true, items })
  })

  it('should returns items with reduced remaining stock for CART_ITEM_ADD', () => {
    const items = [
      { _id: '356', stock: { remaining: 20 } },
      { _id: '123', stock: { remaining: 2 } }
    ]
    const state = productsReducer({ items }, { type: CART_ITEM_ADD, payload: { _id: '123' } })

    expect(state.items[1].stock.remaining).toEqual(1)
  })
})
