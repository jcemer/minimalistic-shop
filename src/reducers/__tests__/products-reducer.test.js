import productsReducer from '../products-reducer'

describe('productsReducer', () => {
  it('should returns given state for unrecognized action', () => {
    const givenState = {}
    const state = productsReducer(givenState, { type: 'UNRECOGNIZED' })

    expect(state).toBe(givenState)
  })

  it('should returns isPending for FETCH_PRODUCTS_PENDING', () => {
    const state = productsReducer({}, { type: 'FETCH_PRODUCTS_PENDING' })

    expect(state).toEqual({ isPending: true, isReady: false, items: [] })
  })

  it('should returns isReady and items for FETCH_PRODUCTS_FULFILLED', () => {
    const items = []
    const state = productsReducer({}, { type: 'FETCH_PRODUCTS_FULFILLED', payload: items })

    expect(state).toEqual({ isPending: false, isReady: true, items })
  })

  it('should returns items with reduced remaining stock for ADD_TO_CART', () => {
    const items = [
      { _id: '356', stock: { remaining: 20 } },
      { _id: '123', stock: { remaining: 2 } }
    ]
    const state = productsReducer({ items }, { type: 'ADD_TO_CART', product: { _id: '123' } })

    expect(state.items[1].stock.remaining).toEqual(1)
  })
})
