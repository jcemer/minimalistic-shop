import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import configureStore from './store'
import { fetchProducts } from './actions/products'

import Header from './components/Header'
import ProductListContainer from './containers/ProductListContainer'
import ProductDetailContainer from './containers/ProductDetailContainer'
import CartContainer from './containers/CartContainer'

import 'semantic-ui-css/semantic.css'
import './stylesheet.css'

const store = configureStore()

class App extends Component {
  componentDidMount() {
    store.dispatch(fetchProducts())
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <div>
            <Header />
            <div className="ui main container">
              <div className="ui stackable grid">
                <div className="twelve wide column">
                  <Route exact path="/" component={ProductListContainer} />
                  <Route exact path="/product/:_id/" component={ProductDetailContainer} />
                </div>
                <div className="four wide column">
                  <CartContainer />
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
