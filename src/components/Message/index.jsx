import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styled';
import { deleteMessage, setTopMessage } from '../../reducers/reducer';

function Message(props) {
  const { message } = props;
  const { userName, profileImage, content, date, messageId } = message;
  const name = useSelector((state) => state.logInReducer.user.name);

  const dispatch = useDispatch();
  const deleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteMessage(id));
    } else {
      e.preventDefault();
    }
  };

  const replyClick = (e) => {
    e.preventDefault();
    dispatch(setTopMessage(message));
  };

  return (
    <S.MessageBox loggedUser={userName === name}>
      {profileImage ? (
        <S.ProfileImage src={profileImage} alt="프로필이미지" />
      ) : (
        <S.NoProfileImage>{userName[0]}</S.NoProfileImage>
      )}
      <div>
        <S.MessageTopBar loggedUser={userName === name}>
          <S.UserName>
            {userName}
            {userName === name && <span>*</span>}
          </S.UserName>
          <S.MessageTimeStamp>{date}</S.MessageTimeStamp>
        </S.MessageTopBar>
        <S.MessageBottomBar loggedUser={userName === name}>
          <S.Content>{content}</S.Content>
          <div>
            {name === userName ? (
              <button type="button" onClick={(e) => deleteClick(e, messageId)}>
                삭제
              </button>
            ) : (
              <button type="button" onClick={(e) => replyClick(e)}>
                답장
              </button>
            )}
          </div>
        </S.MessageBottomBar>
      </div>
    </S.MessageBox>
  );
}

export default Message;
