import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch, hashHistory}  from 'react-router-dom'
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserListPage from './pages/UserList';

ReactDOM.render((
  <HashRouter history={hashHistory}>
    <div>
      <Route path="/" component={HomePage}/>
      <Route path="/user/add" component={UserAddPage}/>
      <Route path="/user/list" component={UserListPage}/>
    </div>
  </HashRouter>
), document.getElementById('app'));