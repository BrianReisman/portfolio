import React from 'react';
import StyledButton from './StyledButton';

const Button = (props) => {
  return(
    <StyledButton>
        {props.text}
    </StyledButton>
)
};

export default Button;
