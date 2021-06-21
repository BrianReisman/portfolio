import React from "react";
import { BsClipboard } from "react-icons/bs";
import styled from "styled-components";

const Icon = styled.div`
  svg {
    height: 16px;
    width: 16px;
  }
  outline: none;
  border: 1px solid #ccc;
  border-left: none;
  border-radius: 0 6px 6px 0;
  max-height: 28px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px 12px; //!repeat

  :hover {
    background-color: #eee;
  }
`;

const CopyIcon = (props) => {
  return (
    <Icon onClick={() => console.log("clicked")}>
      <BsClipboard role="button" />
    </Icon>
  );
};

export default CopyIcon;
