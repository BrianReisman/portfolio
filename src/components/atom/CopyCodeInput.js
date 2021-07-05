import React from 'react';
import styled from 'styled-components';

const CopyCodeInput = styled.input`
  /*/// TODO: import ui=monospace */
  font-family: ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace;
  background-color: #fafbfc;
  max-height: 28px;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  padding: 5px 12px; //3 or 5? //!repeat in both
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 6px 0 0 6px;
  outline: none;
  cursor: text;
  :focus {
    border-right: 1px solid #ccc;
    border: 1px solid #0366d6;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    z-index: 1;
  }
  ::-moz-selection {
    background-color: #4444a440;
  }
  ::selection {
    background-color: #4444a440;
  }
`;

// allows on click of input field to highlight all text
const onClickSelect = ({ target: { id } }) => {
  const inputEl = document.getElementById(id);
  inputEl.focus();
  inputEl.select();
  inputEl.setSelectionRange(0, 1000);
};

const copycode = ({ url }) => (
  <CopyCodeInput id="apiEndpoint" onClick={onClickSelect} value={url} readOnly />
);

export default copycode;
