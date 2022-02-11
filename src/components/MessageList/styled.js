import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 60px);
`;

export const MessageListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 8px;
  overflow: scroll;
`;

export const ReplyTextWrap = styled.div`
  white-space: pre-wrap;
`;
