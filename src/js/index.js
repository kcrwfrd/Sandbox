import '../css/styles.css'
import App from './app/App'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './rootReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
