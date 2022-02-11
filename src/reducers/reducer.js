/* eslint-disable no-case-declarations */
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  REPLY_MESSAGE,
  LOG_IN,
  SET_MESSAGE,
} from 'actions/types';

// 액션 생성 함수
export const logIn = (name) => {
  return { type: LOG_IN, payload: name };
};

export const deleteMessage = (id) => {
  return { type: DELETE_MESSAGE, payload: id };
};

export const replyMessage = (messageInfo) => {
  return { type: REPLY_MESSAGE, payload: messageInfo };
};

export const setMessage = (text) => {
  return { type: SET_MESSAGE, payload: text };
};
export const addMessage = (message) => {
  return { type: ADD_MESSAGE, payload: message };
};

// 초기 설정
const initState = {
  user: {
    id: 4,
    name: '',
  },
  messages: [
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '안녕하세요 저는 정민형입니다.',
      date: '2022-02-10 19:19:03',
      messageId: 1,
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '안녕하세요 저는 김선명입니다.',
      date: '2022-02-10 19:20:03',
      messageId: 2,
    },
    {
      userId: 3,
      userName: '민무길',
      profileImage: 'https://github.com/gilmujjang.png',
      content:
        '안녕하세요 주니어 프론트 엔드 개발자 민무길입니다. 취미는 테니스 입니다',
      date: '2022-02-10 19:21:03',
      messageId: 3,
    },
    {
      userId: 2,
      userName: '김선명',
      profileImage: 'https://github.com/BGM-109.png',
      content: '반가워요',
      date: '2022-02-10 19:22:03',
      messageId: 4,
    },
    {
      userId: 1,
      userName: '정민형',
      profileImage: 'https://github.com/minbr0ther.png',
      content: '저도 반가워요',
      date: '2022-02-10 19:23:03',
      messageId: 5,
    },
  ],
  text: '',
};

// 리듀서
export function messageReducer(state = initState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        messages: [
          ...state.messages.filter(
            (message) => message.messageId !== action.payload,
          ),
        ],
      };
    case REPLY_MESSAGE:
      const { userName, content } = action.payload;
      const message = `${userName}\n${content}\n회신\n${state.text}`;
      return { ...state, text: message };
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
