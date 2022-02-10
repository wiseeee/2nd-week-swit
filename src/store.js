import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

// applyMiddleware: 비동기로 리덕스 상태관리를 해주는데 필요함
// const store = createStore(rootReducer, applyMiddleware());
const store = createStore(rootReducer);

export default store;
