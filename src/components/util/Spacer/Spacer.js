import React from 'react';
import StyledSpacer from './StyledSpacer';
const Spacer = (props) => {
  return(
    <StyledSpacer>
      <p>{props.text}</p>
    </StyledSpacer>
)
};

export default Spacer;
