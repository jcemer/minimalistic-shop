import React from 'react'
import { shallow } from 'enzyme'

import { ProductListPartial, mapStateToProps } from '../product-list-partial'
import ProductList from '../../components/product-list'

describe('ProductListPartial', () => {
  const addToCart = () => {}

  describe('<Component />', () => {
    it('should not render if it is not ready', () => {
      const wrapper = shallow(<ProductListPartial addToCart={addToCart} />)

      expect(wrapper.children().exists()).toBe(false)
    })

    it('should render ProductList with items', () => {
      const items = [{ _id: '123', image: 'url', price: '$1' }]
      const wrapper = shallow(<ProductListPartial addToCart={addToCart} isReady items={items} />)

      expect(wrapper.contains(<ProductList addToCart={addToCart} items={items} />)).toBe(true)
    })
  })

  describe('mapStateToProps', () => {
    it('should returns empty object if it is not ready', () => {
      const props = mapStateToProps(
        { products: { isReady: false } },
      )

      expect(props).toEqual({ isReady: false, items: undefined })
    })

    it('should returns item matched by "_id"', () => {
      const props = mapStateToProps(
        { products: { isReady: true, items: [] } }
      )

      expect(props).toEqual({ isReady: true, items: [] })
    })
  })
})
