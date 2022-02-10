import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  // 만들어둔 리듀서 불러오기
  Reducer,
});

export default rootReducer;
