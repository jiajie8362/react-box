import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from './Auth.redux';

@connect(state=>state.auth, {login})
class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div><h2>Neee Login</h2>
    <button onClick={this.props.login}>Login</button></div>)
  }
}

export default Auth;