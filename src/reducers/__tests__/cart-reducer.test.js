import { CART_ITEM_ADD, CHECKOUT } from '../../action-types'
import cartReducer from '../cart-reducer'

describe('cartReducer', () => {
  it('should returns given state for unrecognized action', () => {
    const givenState = {}
    const state = cartReducer(givenState, { type: 'UNRECOGNIZED' })

    expect(state).toBe(givenState)
  })

  it('should returns items with improved quantity for CART_ITEM_ADD', () => {
    const items = {
      '356': { _id: '356', image: 'url', quantity: 20 },
      '123': { _id: '123', image: 'url', quantity: 2 }
    }
    const state = cartReducer({ items }, { type: CART_ITEM_ADD, payload: { _id: '123', image: 'url' } })

    expect(state.items['123'].quantity).toEqual(3)
  })

  it('should empty items and set purchased for CHECKOUT', () => {
    const items = {
      '356': { _id: '356', image: 'url', quantity: 20 }
    }
    const state = cartReducer({ items }, { type: CHECKOUT })

    expect(state).toEqual({ purchased: true, items: {} })
  })
})
