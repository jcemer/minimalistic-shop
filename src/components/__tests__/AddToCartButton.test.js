import React from 'react'
import { shallow } from 'enzyme'

import AddToCartButton from '../AddToCartButton'

describe('<AddToCartButton />', () => {
  describe('with remaning stock', () => {
    const addToCart = jasmine.createSpy('spy')
    const wrapper = shallow(<AddToCartButton _id='123' stock={{ remaining: 1 }} addToCart={addToCart} />)

    it('should render a enable button', () => {
      expect(wrapper.hasClass('disabled')).toBe(false)
      expect(wrapper.prop('disabled')).toBe(false)
    })

    it('should call add to cart on click', () => {
      wrapper.simulate('click')

      expect(addToCart).toHaveBeenCalledWith('123')
    })
  })

  describe('with no remaning stock', () => {
    const addToCart = jasmine.createSpy('spy')
    const wrapper = shallow(<AddToCartButton _id='123' stock={{ remaining: 0 }} addToCart={addToCart} />)

    it('should render a disabled button with', () => {
      expect(wrapper.hasClass('disabled')).toBe(true)
      expect(wrapper.prop('disabled')).toBe(true)
    })

    it('should call add to cart on click', () => {
      wrapper.simulate('click')

      expect(addToCart).not.toHaveBeenCalled()
    })
  })
})
