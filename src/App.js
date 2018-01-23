import React, {Component} from 'react';
import {DatePicker, message} from 'antd';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    };
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
