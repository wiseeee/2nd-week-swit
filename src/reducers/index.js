import { combineReducers } from 'redux';
import { messageReducer, logInReducer } from 'reducers/reducer';

const rootReducer = combineReducers({
  messageReducer,
  logInReducer,
});

export default rootReducer;
