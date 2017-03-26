import React from 'react'
import { shallow } from 'enzyme'

import { CartContainer, mapStateToProps } from '../CartContainer'
import Cart from '../../components/Cart'

describe('CartContainer', () => {
  const checkout = () => {}

  describe('<Component />', () => {
    it('should render Cart with items', () => {
      const items = { '123': { _id: '123', image: 'url', quantity: 2 } }
      const wrapper = shallow(<CartContainer checkout={checkout} items={items} />)

      expect(wrapper.contains(<Cart checkout={checkout} items={items} />)).toBe(true)
    })
  })

  describe('mapStateToProps', () => {
    it('should returns items from cart', () => {
      const props = mapStateToProps(
        { cart: { items: {} } },
      )

      expect(props).toEqual({ items: {} })
    })
  })
})
