import React from 'react';
import { useSelector } from 'react-redux';
import Message from 'components/Message';
import * as S from './styled';

function MessageList() {
  const AllMessage = useSelector((state) => state.messageReducer.messages);

  const replyText = useSelector((state) => state.messageReducer.text);

  return (
    <>
      <S.MessageListWrap>
        {AllMessage.map((message) => (
          <Message message={message} />
        ))}
      </S.MessageListWrap>
      <S.ReplyTextWrap>{replyText}</S.ReplyTextWrap>
    </>
  );
}

export default MessageList;
