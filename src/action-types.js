import { defineAction } from 'redux-define'

export const CART_ITEM_ADD = defineAction('CART_ITEM_ADD')
export const CHECKOUT = defineAction('CHECKOUT')
export const PRODUCTS_FETCH = defineAction('PRODUCTS_FETCH', ['PENDING', 'FULFILLED'])
