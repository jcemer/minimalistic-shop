import React from 'react'
import { shallow } from 'enzyme'

import Cart from '../Cart'
import CartItem from '../CartItem'

describe('<Cart />', () => {
  const checkout = () => {}

  it('should render CartItem with items', () => {
    const item1 = { _id: '123', image: 'url', price: '$1', quantity: 1 }
    const item2 = { _id: '456', image: 'url', price: '$2', quantity: 1 }
    const items = { '123': item1, '456': item2 }
    const wrapper = shallow(<Cart items={items} checkout={checkout} />)

    expect(wrapper.contains([
      <CartItem {...item1} />,
      <CartItem {...item2} />
    ])).toBe(true)
  })

  it('should render a message if items is empty', () => {
    const wrapper = shallow(<Cart items={{}} checkout={checkout} />)

    expect(wrapper.contains('It\'s empty. Let\'s shop!')).toBe(true)
  })

  it('should render a message if items is purchased', () => {
    const wrapper = shallow(<Cart items={{}} purchased checkout={checkout} />)

    expect(wrapper.contains('Well done. Thank you!')).toBe(true)
  })
})
