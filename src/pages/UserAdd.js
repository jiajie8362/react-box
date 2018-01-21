import React from 'react';
import PropTypes from 'prop-types';

class UserAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: {
          valid: false,
          value: '',
          error: ''
        },
        age: {
          valid: false,
          value: 0,
          error: ''
        },
        gender: {
          valid: false,
          value: '',
          error: ''
        }
      }
    };
  }

  handleValueChange(field, value, type = 'string') {
    if (type === 'number') {
      value = +value;
    }

    this.setState({
      [field]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
    const {name, age, gender} = this.state;
    fetch('http://localhost:3000/user', {
      method: 'post',
      body: JSON.stringify({
        name,
        age,
        gender
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json())
      .then(res => {
        if(res.id) {
          alert('Add user successfully');
          this.setState({
            name: '',
            age: 0,
            gender: ''
          });
          this.props.history.push('/user/list');
        } else {
          alert('Failed!');
        }
      });
  }

  render() {
    const {name, age, gender} = this.state;

    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>用户名：</label>
            <input type="text" value={name} onChange={(e) => this.handleValueChange('name', e.target.value)}/>
            <br/>
            <label>年龄：</label>
            <input type="text" value={age} onChange={(e) => this.handleValueChange('age', e.target.value)}/>
            <br/>
            <label>性别：</label>
            <select value={gender} onChange={(e) => this.handleValueChange('gender', e.target.value)}>
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            <br/>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
    );
  }
}

export default UserAdd;