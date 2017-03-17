import React from 'react'
import { shallow } from 'enzyme'

import ProductList from '../product-list'
import ProductItem from '../product-item'

describe('<ProductList />', () => {
  const addToCart = () => {}

  it('should render ProductItem with items', () => {
    const item1 = { _id: '123', image: 'url', price: '$1' }
    const item2 = { _id: '456', image: 'url', price: '$2' }
    const wrapper = shallow(<ProductList addToCart={addToCart} items={[item1, item2]} />)

    expect(wrapper.contains([
      <ProductItem addToCart={addToCart} {...item1} />,
      <ProductItem addToCart={addToCart} {...item2} />
    ])).toBe(true)
  })
})
