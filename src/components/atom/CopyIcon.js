import React from 'react';
import { BsClipboard } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import styled from 'styled-components';

const Icon = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  svg,
  #check,
  #board {
    height: 16px;
    width: 16px;
    margin-right: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px; //!repeat
  max-height: 28px;
  width: 45px;
  background-color: #fafbfc;
  color: #6a737d;
  border: 1px solid ${({ clicked }) => (clicked ? '#9be9a8' : '#1b1f2326')}; //*
  border-radius: 0 6px 6px 0;
  outline: none;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  cursor: pointer;
  :hover {
    background-color: #f3f4f6;
    border-color: ${({ clicked }) => (clicked ? '#9be9a8' : '#1b1f2326')};
    transition-duration: 0.1s;
  }
  :focus {
    border-right: 1px solid #ccc;
    border: 1px solid #0366d6;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    z-index: 1;
  }

  /* border: 1px solid red; */
`;

const CopyIcon = ({ clickHandler, clicked }) => {
  return (
    <Icon onClick={clickHandler} clicked={clicked} tabIndex={0}>
      {clicked ? <FcCheckmark id="check" /> : <BsClipboard role="button" id="board" />}
    </Icon>
  );
};

export default CopyIcon;
