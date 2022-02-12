import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMessage, setMessage, setReply } from 'reducers/reducer';
import * as S from './styled';

function Message(props) {
  const { message } = props;
  const { userName, profileImage, content, date, messageId } = message;
  const name = useSelector((state) => state.logInReducer.user.name);
  const reply = useSelector((state) => state.messageReducer.reply);
  const text = useSelector((state) => state.messageReducer.text);
  const dispatch = useDispatch();

  const deleteClick = (e) => {
    e.preventDefault();

    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteMessage(messageId));
    } else {
      e.preventDefault();
    }
  };

  const replyClick = (e) => {
    e.preventDefault();

    if (reply !== `${userName}\n${content}\n회신\n`) {
      dispatch(setMessage(text.replace(reply, '')));
      dispatch(setReply(message));
    }
  };

  const myMessage = userName === name;

  return (
    <S.MessageBox myMessage={myMessage}>
      {profileImage ? (
        <S.ProfileImage src={profileImage} alt="프로필이미지" />
      ) : (
        <S.NoProfileImage>{userName[0]}</S.NoProfileImage>
      )}
      <div>
        <S.MessageTopBar myMessage={myMessage}>
          <S.UserName>
            {userName}
            {myMessage && <span>*</span>}
          </S.UserName>
          <S.MessageTimeStamp>{date}</S.MessageTimeStamp>
        </S.MessageTopBar>
        <S.MessageBottomBar myMessage={myMessage}>
          <S.Content>{content}</S.Content>
          <div>
            {myMessage ? (
              <button type="button" onClick={(e) => deleteClick(e)}>
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
