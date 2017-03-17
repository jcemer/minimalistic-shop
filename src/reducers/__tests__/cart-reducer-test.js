import cartReducer from '../cart-reducer'

describe('cartReducer', () => {
  it('should returns given state for unrecognized action', () => {
    const givenState = {}
    const state = cartReducer(givenState, { type: 'UNRECOGNIZED' })

    expect(state).toBe(givenState)
  })

  it('should returns items with improved quantity for ADD_TO_CART', () => {
    const items = {
      '356': { _id: '356', image: 'url', quantity: 20 },
      '123': { _id: '123', image: 'url', quantity: 2 }
    }
    const state = cartReducer({ items }, { type: 'ADD_TO_CART', product: { _id: '123', image: 'url' } })

    expect(state.items['123'].quantity).toEqual(3)
  })
})
