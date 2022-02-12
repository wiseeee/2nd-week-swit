/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Message from 'components/Message';
import Input from 'components/Input/index';
import * as S from './styled';

function MessageList() {
  const AllMessage = useSelector((state) => state.messageReducer.messages);
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [AllMessage]);

  return (
    <S.Wrapper>
      <S.MessageListWrap ref={scrollRef}>
        {AllMessage.map((message, key) => (
          <Message key={key} message={message} />
        ))}
      </S.MessageListWrap>
      <Input scrollToBottom={scrollToBottom} />
    </S.Wrapper>
  );
}

export default MessageList;
