import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import reducer from './reducers'

export default function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware())
  )
}
