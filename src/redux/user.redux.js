
import axios from 'axios'
import {getRedirectPath} from '../util'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState={
  redirectTo:'',
  isAuth:false,
  msg:'',
  user:'',
  type:''
}
// reducer
export function user(state=initState, action){
  return false;
}






