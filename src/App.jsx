import React from 'react';
import Input from 'components/Input/index';
import MessageList from 'components/MessageList/index';
import ChannelToolbar from 'components/ChannelToolbar';
import * as S from 'styles/styled';

function App() {
  // const name = useSelector((state) => state.logInReducer.user.name);
  // const dispatch = useDispatch();
  // dispatch(logIn('test'));

  // useEffect(() => {
  // const userInput = prompt('사용자 이름을 입력해주세요.');
  // dispatch(logIn(userInput));
  // alert(`반갑습니다 ${userInput}님 😀`);
  // }, []);

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
