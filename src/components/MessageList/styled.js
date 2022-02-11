import styled from 'styled-components';

export const MessageListWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 64px - 60px);
  padding: 4px;
  border-radius: 8px;
  overflow: scroll;
`;

export const ReplyTextWrap = styled.div`
  white-space: pre-wrap;
`;
