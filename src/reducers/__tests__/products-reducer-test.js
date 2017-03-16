import productsReducer from '../products-reducer'

describe('productsReducer', () => {
  it('should returns given state for unrecognized action', () => {
    const givenState = {}
    const state = productsReducer(givenState, { type: 'UNRECOGNIZED' })

    expect(state).toBe(givenState)
  })

  it('should returns isPending for FETCH_PRODUCTS_PENDING', () => {
    const state = productsReducer({}, { type: 'FETCH_PRODUCTS_PENDING' })

    expect(state).toEqual({ isPending: true })
  })

  it('should returns isReady and items for FETCH_PRODUCTS_FULFILLED', () => {
    const items = []
    const state = productsReducer({}, { type: 'FETCH_PRODUCTS_FULFILLED', payload: items })

    expect(state).toEqual({ isReady: true, items })
  })
})
