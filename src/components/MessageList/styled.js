import styled from 'styled-components';

export const MessageListWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: calc(100% - 64px);
  padding: 4px;
  border-radius: 8px;
  background-color: #eeeeee;
  overflow: scroll;
`;

export const ReplyTextWrap = styled.div`
  white-space: pre-wrap;
`;
