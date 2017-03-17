import { combineReducers } from 'redux'
import products from './products-reducer';
import cart from './cart-reducer';

export default combineReducers({
  products,
  cart
})
