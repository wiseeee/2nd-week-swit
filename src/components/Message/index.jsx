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
        <div>{userName}</div>
        <div>{date}</div>
        <div>{content}</div>
      </div>
    </S.MessageBox>
  );
}

export default Message;
