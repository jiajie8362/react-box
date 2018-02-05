import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGun, removeGun, addGunAsync} from './index.redux';
const mapStatetoProps = (state) => {
  return {num:state}
}
const actionCreator = {addGun, removeGun, addGunAsync};

@connect(state=>({num:state.counter}))
class App extends React.Component{
  render(){
    const num = this.props.num;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    // num addGun，removeGun，addGunAsync都是connect给的，不需要手动dispatch
    return (
      <div>
        <h2>现在有机枪{num}把</h2>
        <button onClick={addGun}>申请武器</button>
        <button onClick={removeGun}>上交武器</button>
        <button onClick={addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

export default App;