export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = (id) => {
  return {
    type: 'DELETE_MESSAGE',
    id,
  };
};
export const REPLY_MESSAGE = 'REPLY_MESSAGE';
export const LOG_IN = 'LOG_IN';
