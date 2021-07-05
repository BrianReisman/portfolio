import React, { useState } from 'react';

import CopyIcon from '../../atom/CopyIcon';
import CopyCodeInput from '../../atom/CopyCodeInput';
import { FiExternalLink, FiDownload } from 'react-icons/fi';
import { GoTerminal } from 'react-icons/go';
import {
  Root,
  CopyBar,
  Text,
  APISection,
  ResumeLink,
  JSONHeading,
  CopiedMessage,
} from './ResumeMenu.elements';

import PDF from '../../../assets/Brian Reisman - Resume.pdf';

const ResumeMenu = ({ showDropDown, closeAll }) => {
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
    <Root showDropDown={showDropDown}>
      <ResumeLink href={PDF} target="_blank" rel="noreferrer" onClick={closeAll}>
        <FiExternalLink />
        Open Resume in a New Tab
      </ResumeLink>

      <ResumeLink href={PDF} download onClick={closeAll}>
        <FiDownload />
        Download PDF
      </ResumeLink>
      
      <APISection>
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
      </APISection>
    </Root>
  );
};
export default ResumeMenu;
