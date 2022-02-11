import styled from 'styled-components';

export const MessageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: ${(props) => (props.loggedUser ? 'flex-end' : 'flex-start')};
  flex-direction: ${(props) => (props.loggedUser ? 'row-reverse' : 'row')};
  padding: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  margin: 8px; 0
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
  align-items: baseline;
  flex-direction: ${(props) => (props.loggedUser ? 'row-reverse' : 'row')};
`;

export const UserName = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 4px;
`;

export const MessageTimeStamp = styled.div`
  padding: 4px;
  font-size: 12px;
`;

export const MessageBottomBar = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: ${(props) => (props.loggedUser ? 'row-reverse' : 'row')};
  align-self: ${(props) => (props.loggedUser ? 'flex-end' : 'flex-start')};
  button {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 4px;
  white-space: pre-wrap;
`;
