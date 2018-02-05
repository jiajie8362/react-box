import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Auth from './Auth';
import Dashboard from './Dashboard';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import reducers from './reducer';

const store = createStore(reducers, applyMiddleware(thunk), window.devToolsExtension());

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div><Switch>
          <Route path="/login" exact component={Auth}/>
          {/*<Route path="/dashboard" exact component={Dashboard}/>*/}
          {/*<Redirect to="/login"/>*/}
        </Switch></div>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root')
)
