/* eslint-disable no-constant-condition */
import React, { useEffect } from 'react';
import Input from 'components/Input/index';
import MessageList from 'components/MessageList/index';
import ChannelToolbar from 'components/ChannelToolbar';
import * as S from 'styles/styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'reducers/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userInput;
    while (true) {
      userInput = prompt('사용자 이름을 입력해주세요.');
      if (userInput !== null && userInput.length > 0) break;
    }
    dispatch(logIn(userInput));
    alert(`반갑습니다 ${userInput}님 😀`);
  }, []);

  return (
    <S.Layout>
      <S.Main>
        <ChannelToolbar />
        <MessageList />
        <Input />
      </S.Main>
    </S.Layout>
  );
}

export default App;
