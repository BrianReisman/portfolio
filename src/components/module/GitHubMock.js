import React from 'react';
import styled from 'styled-components';

import CopyIcon from '../atom/CopyIcon';
import CopyCodeInput from '../atom/CopyCodeInput';

const Module = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  /* * > {
    padding: 16px;
  } */
  width: 500px;
`;

const CopyBar = styled.div`
  /* border: 1px solid #aaa; */

  display: flex;
  width: 100%;
`;

const Text = styled.p`
  /* border: 1px solid #fe4; */
  /* box-sizing: border-box; */

  width: 100%;
  line-height: 1.2;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji;
  margin-top: 5px;
  color: #586069;
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: inherit;
    background-color: #87837826;
    color: #eb5757;
    border-radius: 3px;
    padding: 0.2em 0.4em;
  }
`;

const Copy = styled.div`
  border-bottom: 1px solid #e1e4e8;
  padding: 16px; //get this on all three sections from parent
`;
const ViewPDF = styled.div``;
const DownloadPDF = styled.div``;

const url = 'https://vercel-api-ii.vercel.app/api/resume';

const onClickCopy = () => navigator.clipboard.writeText(url);

const CopyBlock = (props) => {
  return (
    <Module>
      <Copy>
        <CopyBar>
          <CopyCodeInput url={url} />
          <CopyIcon onClickCopy={onClickCopy} url={url} />
        </CopyBar>
        <Text>
          If you're more JSON inclined, feel free to <code>get</code> my resume here. Postman guy?
          Insomnia gal? Plain ol' browser? You know what to do.
        </Text>
      </Copy>
      <ViewPDF>asdf</ViewPDF>
      <DownloadPDF>asdf</DownloadPDF>
    </Module>
  );
};

export default CopyBlock;
