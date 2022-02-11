import React, { useEffect } from 'react';
import Input from 'components/Input/index';
import MessageList from 'components/MessageList/index';
import ChannelToolbar from 'components/ChannelToolbar';
import * as S from 'styles/styled';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from 'reducers/reducer';

function App() {
  const name = useSelector((state) => state.logInReducer.user.name);
  const dispatch = useDispatch();

  useEffect(() => {
    const userInput = prompt('사용자 이름을 입력해주세요.');
    dispatch(logIn(userInput));
    alert(`반갑습니다 ${userInput}님 😀`);
  }, []);

  return (
    <S.Layout>
      <S.Main>
        <div>{name}</div>
        <ChannelToolbar />
        <MessageList />
        <Input />
      </S.Main>
    </S.Layout>
  );
}

export default App;
