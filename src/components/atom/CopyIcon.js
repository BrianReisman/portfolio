import React, { useState } from 'react';
import { BsClipboard } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import styled from 'styled-components';

const Icon = styled.div`
  svg {
    height: 16px;
    width: 16px;
  }
  background-color: #fafbfc;
  color: #6a737d;
  outline: none;
  border: 1px solid #1b1f2326; //*
  border-left: none;
  border-radius: 0 6px 6px 0;
  max-height: 28px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 12px; //!repeat
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  :hover {
    background-color: #f3f4f6;
    border-color: #1b1f2326;
    transition-duration: 0.1s;
  }
`;

const CopiedMessage = styled.div`
  color: green;
  font-size: 12px;
`;

const CopyIcon = ({ onClickCopy }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    onClickCopy();
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <Icon onClick={clickHandler}>{clicked ? <FcCheckmark /> : <BsClipboard role="button" />}</Icon>
  );
};

export default CopyIcon;