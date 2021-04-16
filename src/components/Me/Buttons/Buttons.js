import React from 'react';
import StyledButtons from './StyledButtons';
import Button from "./Button/Button";

const Buttons = (props) => {
  return(
    <StyledButtons>
      <Button text='The Short Version'/>
      <Button text='Less Short Version'/>
    </StyledButtons>
)
};

export default Buttons;
