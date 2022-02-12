/* eslint-disable no-case-declarations */
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  LOG_IN,
  SET_MESSAGE,
  SET_REPLY,
} from 'actions/types';
import initState from './initState';

export const logIn = (name) => {
  return { type: LOG_IN, payload: name };
};

export const deleteMessage = (id) => {
  return { type: DELETE_MESSAGE, payload: id };
};

export const setMessage = (text) => {
  return { type: SET_MESSAGE, payload: text };
};
export const addMessage = (message) => {
  return { type: ADD_MESSAGE, payload: message };
};
export const setReply = (messageInfo) => {
  return { type: SET_REPLY, payload: messageInfo };
};

export function logInReducer(state = initState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: { ...state.user, name: action.payload },
      };
    default:
      return {
        ...state,
      };
  }
}

export function messageReducer(state = initState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        text: '',
        reply: '',
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages.filter(
            (message) => message.messageId !== action.payload,
          ),
        ],
      };
    case SET_REPLY:
      const userInfo = action.payload;
      const msg = `${userInfo.userName}\n${userInfo.content}\n회신\n`;
      return { ...state, reply: msg };
    case SET_MESSAGE:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
