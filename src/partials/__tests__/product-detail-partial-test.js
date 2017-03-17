import React from 'react'
import { shallow } from 'enzyme'

import { ProductDetailPartial, mapStateToProps } from '../product-detail-partial'
import ProductDetail from '../../components/product-detail'

describe('ProductDetailPartial', () => {
  describe('<Component />', () => {
    const addToCart = () => {}

    it('should not render if it is not ready', () => {
      const wrapper = shallow(<ProductDetailPartial addToCart={addToCart} />)

      expect(wrapper.children().exists()).toBe(false)
    })

    it('should render "not found" without item', () => {
      const wrapper = shallow(<ProductDetailPartial addToCart={addToCart} isReady />)

      expect(wrapper.contains('Product not found')).toBe(true)
    })

    it('should render ProductDetail with item', () => {
      const item = { _id: '123', image: 'url', price: '$1', description: 'bla', stock: { remaining: 1 } }
      const wrapper = shallow(<ProductDetailPartial addToCart={addToCart} isReady item={item} />)

      expect(wrapper.contains(<ProductDetail addToCart={addToCart} {...item} />)).toBe(true)
    })
  })

  describe('mapStateToProps', () => {
    it('should returns no item if products is not ready', () => {
      const props = mapStateToProps(
        { products: { isReady: false } },
        { match: { params: { _id: 1 } } }
      )

      expect(props).toEqual({ isReady: false, item: undefined })
    })

    it('should returns matched item by "_id" if products is ready', () => {
      const item = { _id: 1 }
      const props = mapStateToProps(
        { products: { isReady: true, items: [{ _id: 0 }, item] } },
        { match: { params: { _id: 1 } } }
      )

      expect(props).toEqual({ isReady: true, item })
    })
  })
})
