import React from 'react';
import * as S from './styled';

function Message(props) {
  const { message } = props;
  const { userName, profileImage, content, date } = message;

  return (
    <S.MessageBox>
      {profileImage ? (
        <S.ProfileImage src={profileImage} alt="프로필이미지" />
      ) : (
        <S.NoProfileImage>{userName[0]}</S.NoProfileImage>
      )}
      <div>
        <S.MessageTopBar>
          <S.UserName>{userName}</S.UserName>
          <S.MessageTimeStamp>{date}</S.MessageTimeStamp>
        </S.MessageTopBar>
        <S.MessageBottomBar>
          <S.Content>{content}</S.Content>
          <div>
            <button type="button">답장</button>
            <button type="button">삭제</button>
          </div>
        </S.MessageBottomBar>
      </div>
    </S.MessageBox>
  );
}

export default Message;
