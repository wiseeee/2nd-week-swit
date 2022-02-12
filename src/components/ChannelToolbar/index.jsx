import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faUser,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

function ChannelToolbar() {
  return (
    <S.ToolBarContainer>
      <S.ToolBarBrand>
        Sixted
        <FontAwesomeIcon
          icon={faAngleDown}
          size="xs"
          style={{ marginLeft: '5px' }}
        />
      </S.ToolBarBrand>
      <S.ToolBarIcons>
        <S.HoverDiv>
          <FontAwesomeIcon icon={faUser} /> 4
        </S.HoverDiv>
        <S.HoverDiv>
          <FontAwesomeIcon icon={faThumbtack} /> 0
        </S.HoverDiv>
      </S.ToolBarIcons>
    </S.ToolBarContainer>
  );
}

export default ChannelToolbar;
