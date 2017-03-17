import React from 'react'
import { shallow } from 'enzyme'

import Cart from '../cart'
import CartItem from '../cart-item'

describe('<Cart />', () => {
  it('should render CartItem with items', () => {
    const item1 = { _id: '123', image: 'url', price: '$1', quantity: 1 }
    const item2 = { _id: '456', image: 'url', price: '$2', quantity: 1 }
    const items = { '123': item1, '456': item2 }
    const wrapper = shallow(<Cart items={items} />)

    expect(wrapper.contains([
      <CartItem {...item1} />,
      <CartItem {...item2} />
    ])).toBe(true)
  })

  it('should render a message if items is empty', () => {
    const wrapper = shallow(<Cart items={{}} />)

    expect(wrapper.contains('It\'s empty. Let\'s shop!')).toBe(true)
  })
})
