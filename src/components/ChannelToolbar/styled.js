import styled from 'styled-components';

export const ToolBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: white;
`;

export const ToolBarBrand = styled.h1`
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  space-x: 2px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ToolBarIcons = styled.div`
  color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const HoverDiv = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s;
  }
`;
