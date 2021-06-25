import React from 'react';
import styled from 'styled-components';

import CopyIcon from '../atom/CopyIcon';
import CopyCodeInput from '../atom/CopyCodeInput';
import { FiExternalLink, FiDownload } from 'react-icons/fi';
import PDF from '../../assets/Brian Reisman - Resume.pdf';

const Module = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  /* * > { //*apply to all in one place?
    padding: 16px;
  } */
  width: 360px;
  :before,
  :after {
    content: '';
    display: inline-block;
    position: relative;
    width: 0px;
  }
  :before {
    border: 8px solid #00000000;
    border-bottom: 8px solid #e1e4e8;
    left: 330px;
    top: -17px;
  }
  :after {
    border: 8px solid #00000000;
    border-bottom: 8px solid white;
    left: 330px;
    top: -328px;
  }
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
  padding: 16px; //get this on all three sections from parent
`;

const ResumeLinks = styled.a`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #e1e4e8;
  font-size: 14px;
  font-weight: 600;
  color: #24292e;
  svg {
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
  :hover {
    background-color: #f6f8fa;
  }
`;

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

      <ResumeLinks href={PDF} target="_blank" rel="noreferrer">
        <FiExternalLink />
        Open Resume in a New Tab
      </ResumeLinks>

      <ResumeLinks href={PDF} download>
        <FiDownload />
        Download PDF Resume
      </ResumeLinks>
    </Module>
  );
};

export default CopyBlock;
