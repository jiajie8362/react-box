import React, {Component} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import App from './App';
import {connect} from 'react-redux';
import {logout} from './Auth.redux';

@connect(state => state.auth, {logout})
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const redirectToLogin = <Redirect to="/login"></Redirect>
    const app = (
      <div>
        <ul>
          <li>
            <Link to="/dashboard/">yiying</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">erying</Link>
          </li>
          <li>
            <Link to="/dashboard/qibingying">qibingying</Link>
          </li>
        </ul>
        <Route path="/dashboard/" component={App}></Route>
      </div>
    );
    return this.state.auth.isLogin ? app : redirectToLogin;
  }
}

export default Dashboard;