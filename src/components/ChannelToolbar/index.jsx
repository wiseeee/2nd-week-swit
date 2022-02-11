import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faUser,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import {
  ToolBarContainer,
  ToolBarBrand,
  ToolBarIcons,
  HoverDiv,
} from './styled';

function ChannelToolbar() {
  return (
    <ToolBarContainer>
      <ToolBarBrand>
        Sixted
        <FontAwesomeIcon
          icon={faAngleDown}
          size="xs"
          style={{ marginLeft: '5px' }}
        />
      </ToolBarBrand>
      <ToolBarIcons>
        <HoverDiv>
          <FontAwesomeIcon icon={faUser} /> 4
        </HoverDiv>
        <HoverDiv>
          <FontAwesomeIcon icon={faThumbtack} /> 0
        </HoverDiv>
      </ToolBarIcons>
    </ToolBarContainer>
  );
}

export default ChannelToolbar;
