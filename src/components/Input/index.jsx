/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { faPaperPlaneTop } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper, MessageInput } from './styled';

function Input() {
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    e.preventDefault();

    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    alert(message);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <MessageInput
          type="text"
          placeholder="Enter message"
          name="message"
          onChange={onChange}
          onKeyDown={handleKeyPress}
        />
        <button type="submit" disabled={!message}>
          전송!
          {/* <FontAwesomeIcon icon={['fas', 'coffee']} /> */}
        </button>
      </form>
    </Wrapper>
  );
}

export default Input;
