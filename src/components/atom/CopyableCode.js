import React from "react";
import styled from "styled-components";

const CopyableCode = styled.input`
  /* margin: 14px 0 14px 14px; */

  cursor: text;
  font-size: 16px;
  box-sizing: border-box;
  padding: 5px 12px; //3 or 5? //!repeat in both
  outline: none;
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  /*/// TODO: import ui=monospace */
  font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono,
    Menlo, monospace;
  max-height: 28px;
  width: 50%;

  :focus {
    border: 1px solid tomato;
  }
`;

const onClickSelect = ({ target: { id } }) => {
  const inputEl = document.getElementById(id);
  inputEl.focus();
  inputEl.select();
};

const copycode = ({ url }) => (
  <CopyableCode id="apiEndpoint" onClick={onClickSelect} value={url} readOnly />
);

export default copycode;
