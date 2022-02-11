/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, addMessage } from 'reducers/reducer';
import { Wrapper, MessageInput, Form, SendBtn } from './styled';

function Input(props) {
  const textRef = useRef();
  const { scrollToBottom } = props;
  const [rows, setRows] = useState(2);
  const text = useSelector((state) => state.messageReducer.text);
  const currentUser = useSelector((state) => state.logInReducer.user);
  const messages = useSelector((state) => state.messageReducer.messages);
  const reply = useSelector((state) => state.messageReducer.reply);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMessage(reply + text));
  }, [reply]);

  useEffect(() => {
    const textareaLineHeight = 24;
    const currentRows =
      ~~(textRef.current.scrollHeight / textareaLineHeight) + 1;
    if (currentRows <= 2) {
      setRows(2);
    } else if (currentRows > 10) {
      setRows(10);
    } else {
      setRows(currentRows);
    }
  }, [text]);

  const onChange = (e) => {
    e.preventDefault();
    if (reply === '') {
      dispatch(setMessage(e.target.value));
    } else if (reply.length > 0) {
      const temp = e.target.value.replace(reply, '');
      dispatch(setMessage(reply + temp));
    }
    scrollToBottom();
  };
  const timestamp = () => {
    const today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
  };

  const onSubmit = (e) => {
    const newMessage = {
      userId: currentUser.id,
      userName: currentUser.name,
      profileImage: '',
      content: text,
      date: timestamp(),
      messageId: messages.length + 1,
    };
    e.preventDefault();
    dispatch(addMessage(newMessage));
    setRows(2);
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
      <FontAwesomeIcon icon={faPlus} size="lg" />
      <Form onSubmit={onSubmit}>
        <MessageInput
          type="textarea"
          rows={rows}
          ref={textRef}
          placeholder="Enter message"
          name="message"
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyPress}
        />
        <SendBtn
          type="submit"
          disabled={!text}
          isActive={text && text.length > 0}
        >
          <FontAwesomeIcon icon={faPaperPlane} size="2x" inverse />
        </SendBtn>
      </Form>
    </Wrapper>
  );
}

export default Input;
