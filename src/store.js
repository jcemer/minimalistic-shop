import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import reducer from './reducers'

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, promiseMiddleware())
  )
}

export default configureStore
