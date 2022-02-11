import React, { useEffect } from 'react';
import Input from 'components/Input/index';
import MessageList from 'components/MessageList/index';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'reducers/reducer';
import ChannelToolbar from 'components/ChannelToolbar';
import * as S from 'styles/styled';

function App() {
  const name = useSelector((state) => state.logInReducer.user.name);
  const dispatch = useDispatch();
  dispatch(logIn('민무길'));

  useEffect(() => {
    // const userInput = prompt('사용자 이름을 입력해주세요.');
    // dispatch(logIn(userInput));
    // alert(`반갑습니다 ${userInput}님 😀`);
  }, []);

  return (
    <div className="App">
      <S.Layout>
        <S.Main>
          <ChannelToolbar />
          <MessageList />
          <Input />
          <span> 리덕스 테스트 : {name} </span>
        </S.Main>
      </S.Layout>
    </div>
  );
}

export default App;
