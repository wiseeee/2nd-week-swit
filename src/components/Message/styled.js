import styled from 'styled-components';

export const MessageBox = styled.div`
  display: flex;
  padding: 8px;
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 4px;
`;

export const NoProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #ffc0cb;
  font-size: 16px;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
`;

export const MessageTopBar = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 4px;
`;

export const MessageTimeStamp = styled.div`
  padding: 4px;
`;

export const Content = styled.div`
  padding: 4px;
`;
