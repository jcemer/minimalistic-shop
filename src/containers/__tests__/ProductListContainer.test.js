import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import { MemoryRouter } from 'react-router-dom'

import { ProductListContainer, mapStateToProps } from '../ProductListContainer'
import ProductList from '../../components/ProductList'

describe('ProductListContainer', () => {
  const addToCart = () => {}

  describe('<Component />', () => {
    it('should not render if it is not ready', () => {
      const wrapper = shallow(<ProductListContainer addToCart={addToCart} />)

      expect(wrapper.children().exists()).toBe(false)
    })

    it('should render ProductList with items', () => {
      const items = [{ _id: '123', image: 'url', price: '$1' }]
      const wrapper = shallow(<ProductListContainer addToCart={addToCart} isReady items={items} />)

      expect(wrapper.contains(<ProductList addToCart={addToCart} items={items} />)).toBe(true)
    })

    it('should render the proper HTML of ProductList with items', () => {
      const items = [{ _id: '123', image: 'url', price: '$1', stock: { remaining: 2 } }]
      const wrapper = render(
        <MemoryRouter>
          <ProductListContainer addToCart={addToCart} isReady items={items} />
        </MemoryRouter>
      )

      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should returns no items if products is not ready', () => {
      const props = mapStateToProps(
        { products: { isReady: false } },
      )

      expect(props).toEqual({ isReady: false, items: undefined })
    })

    it('should returns items if products is ready', () => {
      const props = mapStateToProps(
        { products: { isReady: true, items: [] } }
      )

      expect(props).toEqual({ isReady: true, items: [] })
    })
  })
})
