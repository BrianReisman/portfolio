import React from "react";
import styled from "styled-components";

import CopyIcon from "../atom/CopyIcon";
import CopyableCode from "../atom/CopyableCode";

const Module = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 10px;
  > * {
    /* border: 1px solid purple; */
  }
`;

const url = "https://iwantedbrian.com/api/resume";

const onClickCopy = () => navigator.clipboard.writeText(url);

const CopyBlock = (props) => {
  return (
    <Module>
      <CopyableCode url={url} />
      <CopyIcon onClickCopy={onClickCopy} url={url} />
    </Module>
  );
};

export default CopyBlock;
