import React from 'react';
import * as S from './styled';

function Message(message) {
  const { userName, profileImage, content, date } = message.message;
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
        <S.Content>{content}</S.Content>
      </div>
    </S.MessageBox>
  );
}

export default Message;
