import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {counter, addGun, removeGun, addGunAsync} from './index.redux';
import {Provider} from 'react-redux';

const store = createStore(counter, applyMiddleware(thunk), window.devToolsExtension());

ReactDom.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ), document.getElementById('root')
)
