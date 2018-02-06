
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
function counter(state=0, action)  {
  // let state = state||0
  return 10;
}
export default combineReducers({  blank: function(state, action) {if (state == null) state = []; return state;}
})

