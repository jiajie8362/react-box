import React from 'react';
import {Icon, Form, Input, Button, message} from 'antd';
import {post} from '../utils/request';
import style from '../styles/login-page.less';
const FormItem = Form.Item;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if(!err) {
    //
    //   }
    // });
  }

  render() {
    return (
      <div className="style.wrapper">
        <Form className="ant-form-horizontal" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input type="text"/>
          </FormItem>
          <FormItem>
            <Input type="password"/>
          </FormItem>
          <Button className={style.btn} type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}