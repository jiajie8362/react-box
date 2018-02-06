import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this);
    this.state = {
      type: 'genius'
    }
  }

  register() {
    this.props.history.push('/register');
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>UserName</InputItem>
          <InputItem>PassWord</InputItem>
          <InputItem>Confirm PassWord</InputItem>
          <RadioItem checked={this.state.type=='genius'}>牛人</RadioItem>
          <RadioItem checked={this.state.type=='boss'}>Boss</RadioItem>
          <WhiteSpace/>
          <Button></Button>
        </List>
      </div>
    )
  }
}

export default Register;