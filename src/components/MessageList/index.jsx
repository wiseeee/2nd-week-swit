import React from 'react';
import { useSelector } from 'react-redux';
import Message from 'components/Message';

function MessageList() {
  const AllMessage = useSelector((state) => state.messageReducer.messages);

  return (
    <div>
      {AllMessage.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}

export default MessageList;
