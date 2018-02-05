const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//noinspection JSAnnotator
export function auth(state = {isAuth:false, user:'LiYunLong'}, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, isAuth:true};
      break;
    case LOGOUT:
      return {...state, isAuth:false};
      break;
    default:
      return state;
  }
}

export function login() {
  return {type: LOGIN};
}

export function logout() {
  return {type:LOGOUT};
}