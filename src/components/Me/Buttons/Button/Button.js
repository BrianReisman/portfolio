import React from 'react';
import StyledButton from './StyledButton';

const Button = (props) => {
  const clickHandler = ()=>{
    alert('clicked')
  }
  
  return(
    <StyledButton onClick={clickHandler}>
        {props.text}
    </StyledButton>
)
};

export default Button;
