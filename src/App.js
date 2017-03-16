import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import configureStore from './store'
import fetchProducts from './actions/fetch-products-action'

import HeaderPartial from './partials/header-partial'
import ProductListPartial from './partials/product-list-partial'
import ProductItemPartial from './partials/product-item-partial'

import 'semantic-ui-css/semantic.css'
import './stylesheet.css'

const store = configureStore()

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchProducts())
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <HeaderPartial />
            <div className='ui main container'>
              <Route exact path="/" component={ProductListPartial} />
              <Route exact path="/product/:_id/" component={ProductItemPartial} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
