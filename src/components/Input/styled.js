import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 20px;
  background-color: #fff;
  color: #e6e6e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 10px;
  width: calc(100% - 40px);
  &:focus-within {
    border: 1px solid #333;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 10px;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  resize: none;
  height: auto;
  &:focus {
    outline: none;
  }

  &:placeholder {
    color: #e6e6e8;
  }
`;

export const SendBtn = styled.button`
  height: 40px;
  width: 40px;
  background-color: ${(props) => (props.isActive ? '#478bff' : '#e6e6e8')};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? 'rgb(30, 104, 246)' : '#e6e6e8'};
  }
`;
