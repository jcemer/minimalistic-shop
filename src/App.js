import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import configureStore from './store'
import { fetchProducts } from './actions/products'

import HeaderPartial from './partials/header-partial'
import ProductListPartial from './partials/product-list-partial'
import ProductDetailPartial from './partials/product-detail-partial'
import CartPartial from './partials/cart-partial'

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
            <div className="ui main container">
              <div className="ui stackable grid">
                <div className="twelve wide column">
                  <Route exact path="/" component={ProductListPartial} />
                  <Route exact path="/product/:_id/" component={ProductDetailPartial} />
                </div>
                <div className="four wide column">
                  <CartPartial />
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
