import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'
import { MemoryRouter } from 'react-router-dom'

import { ProductDetailContainer, mapStateToProps } from '../ProductDetailContainer'
import ProductDetail from '../../components/ProductDetail'

describe('ProductDetailContainer', () => {
  describe('<Component />', () => {
    const addToCart = () => {}

    it('should not render if it is not ready', () => {
      const wrapper = shallow(<ProductDetailContainer addToCart={addToCart} />)

      expect(wrapper.children().exists()).toBe(false)
    })

    it('should render "not found" without item', () => {
      const wrapper = shallow(<ProductDetailContainer addToCart={addToCart} isReady />)

      expect(wrapper.contains('Product not found')).toBe(true)
    })

    it('should render ProductDetail with item', () => {
      const item = { _id: '123', image: 'url', price: '$1', description: 'bla', stock: { remaining: 1 } }
      const wrapper = shallow(<ProductDetailContainer addToCart={addToCart} isReady item={item} />)

      expect(wrapper.contains(<ProductDetail addToCart={addToCart} {...item} />)).toBe(true)
    })

    it('should render the proper HTML of ProductDetail with item', () => {
      const item = { _id: '123', image: 'url', price: '$1', description: 'bla', stock: { remaining: 1 } }
      const wrapper = render(
        <MemoryRouter>
          <ProductDetailContainer addToCart={addToCart} isReady item={item} />
        </MemoryRouter>
      )

      expect(toJson(wrapper)).toMatchSnapshot()
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
