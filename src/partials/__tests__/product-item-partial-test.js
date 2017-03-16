import React from 'react'
import { shallow } from 'enzyme'

import { ProductItemPartial, mapStateToProps } from '../product-item-partial'
import ProductDetail from '../../components/product-detail'

describe('ProductItemPartial', () => {
  describe('<Component />', () => {
    it('should not render if it is not ready', () => {
      const wrapper = shallow(<ProductItemPartial />)

      expect(wrapper.children().exists()).toBe(false)
    })

    it('should render "not found" without item', () => {
      const wrapper = shallow(<ProductItemPartial isReady />)

      expect(wrapper.contains('Product not found')).toBe(true)
    })

    it('should render ProductDetail with item', () => {
      const item = { _id: '123', image: 'url', price: '$1', description: 'bla', stock: { remaining: 1 } }
      const wrapper = shallow(<ProductItemPartial isReady item={item} />)

      expect(wrapper.contains(<ProductDetail {...item} />)).toBe(true)
    })
  })

  describe('mapStateToProps', () => {
    it('should returns no item if it is not ready', () => {
      const props = mapStateToProps(
        { products: { isReady: false } },
        { match: { params: { _id: 1 } } }
      )

      expect(props).toEqual({ isReady: false, item: undefined })
    })

    it('should returns item matched by "_id"', () => {
      const item = { _id: 1 }
      const props = mapStateToProps(
        { products: { isReady: true, items: [{ _id: 0 }, item] } },
        { match: { params: { _id: 1 } } }
      )

      expect(props).toEqual({ isReady: true, item })
    })
  })
})
