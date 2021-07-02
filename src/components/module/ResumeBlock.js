import React, { useState } from 'react';
import styled from 'styled-components';

import CopyIcon from '../atom/CopyIcon';
import CopyCodeInput from '../atom/CopyCodeInput';
import { FiExternalLink, FiDownload } from 'react-icons/fi';
import { GoTerminal } from 'react-icons/go';

import PDF from '../../assets/Brian Reisman - Resume.pdf';

const Module = styled.div`
  z-index: 10;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 5px;

  display: ${(props) => (props.showDropDown ? 'flex' : 'none')};
  flex-direction: column;
  width: 360px;
  /* * > { //*apply to all in one place?
    padding: 16px;
  } */
  :before,
  :after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0px;
  }
  :before {
    border: 8px solid #00000000;
    border-bottom: 8px solid #e1e4e8;
    /* border-bottom: 8px solid teal; */
    z-index: 1;
    left: 330px;
    top: -15px;
  }
  /* ///!!! caution for breakpoints !!!// */
  :after {
    border: 8px solid #00000000;
    border-bottom: 8px solid white;
    /* border-bottom: 8px solid red; */
    z-index: 2;
    left: 330px;
    top: -13px;
  }
`;

const CopyBar = styled.div`
  /* border: 1px solid #aaa; */

  position: relative;
  display: flex;
  width: 100%;
`;

const Text = styled.p`
  box-sizing: border-box;
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
  svg {
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
`;

const ResumeLinks = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  font-size: 14px;
  font-weight: 600;
  color: #24292e;
  padding: 16px;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
  :hover {
    background-color: #f6f8fa;
  }
`;

const JSONHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;

  /* border: 1px solid gold; */
`;

const CopiedMessage = styled.div`
  /* display: ${({ clicked }) => (clicked ? 'inherit' : 'none')}; */
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  font-size: 11px;
  position: absolute;
  right: -6px;
  top: -33px;
  border: 1px solid black;
  padding: 6px;
  border-radius: 8px;
  background-color: black;
  color: white;
  transition: .25s ease-in;
  :before,
  :after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0px;
  }
  :before {
    border: 6px solid #00000000;
    border-top: 6px solid black;
    z-index: 3;
    left: 18px;
    top: 23px;
  }
  /* :after {
    border: 8px solid #00000000;
    border-top: 8px solid white;
    z-index: 4;
    left: 23px;
    top: 23px;
  } */
`;

const ResumeBlock = ({ showDropDown, closeAll }) => {
  const [clicked, setClicked] = useState(false);

  const url = 'https://vercel-api-ii.vercel.app/api/resume';

  const onClickCopy = () => navigator.clipboard.writeText(url);

  const clickHandler = () => {
    onClickCopy();
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <Module showDropDown={showDropDown}>
      <ResumeLinks href={PDF} target="_blank" rel="noreferrer" onClick={closeAll}>
        <FiExternalLink />
        Open Resume in a New Tab
      </ResumeLinks>

      <ResumeLinks href={PDF} download onClick={closeAll}>
        <FiDownload />
        Download PDF
      </ResumeLinks>

      <Copy>
        {/* //TODO add icon and font weight 500 here also */}
        <JSONHeading>
          <GoTerminal />
          JSON Resume API
        </JSONHeading>

        <CopyBar>
          <CopyCodeInput url={url} />
          <CopyIcon clickHandler={clickHandler} url={url} clicked={clicked} />
          <CopiedMessage clicked={clicked}>Copied!</CopiedMessage>
        </CopyBar>

        <Text>
          If you're more JSON inclined, feel free to <code>get</code> my resume here. Postman guy?
          Insomnia gal? Plain ol' browser? You know what to do.
        </Text>
      </Copy>
    </Module>
  );
};
export default ResumeBlock;
