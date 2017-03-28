import { createAction } from 'redux-actions'

import { PRODUCTS_FETCH } from '../action-types'

const FETCH_PRODUCTS_URL = 'http://beta.json-generator.com/api/json/get/4kiDK7gxZ'

export const fetchProducts = createAction(PRODUCTS_FETCH, () =>
  fetch(FETCH_PRODUCTS_URL).then(response => response.json())
)
