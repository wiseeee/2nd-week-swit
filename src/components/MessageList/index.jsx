import React from 'react';
import { useSelector } from 'react-redux';
import Message from 'components/Message';
import * as S from './styled';

function MessageList() {
  const AllMessage = useSelector((state) => state.messageReducer.messages);
  const ReverseAllMessageKeys = Object.keys(AllMessage).reverse();

  return (
    <S.MessageListWrap>
      {ReverseAllMessageKeys.map((key) => (
        <Message key={key} message={AllMessage[key]} />
      ))}
    </S.MessageListWrap>
  );
}

export default MessageList;
