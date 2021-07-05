import React from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown, BsBoxArrowUpRight } from 'react-icons/bs';
import ResumeBlock from '../molecule/ResumeMenu/ResumeMenu';
import PDF from '../../assets/Brian Reisman - Resume.pdf';

const Nav = ({ scrollClickHandler, showDropDown, showResume, closeAll, modal }) => {
  return (
    <NavRoot>
      <Button onClick={scrollClickHandler} className="stack">
        Stack
      </Button>
      <Button onClick={scrollClickHandler} className="me">
        Me
      </Button>
      <Button onClick={scrollClickHandler} className="connect">
        Connect
      </Button>

      {!modal ? (
        <Button className="dropdown" onClick={showResume}>
          Resume
          <BsCaretDown className="downArrow" />
        </Button>
      ) : (
        <a
          style={{ color: '#FF6B12' }}
          className="dropdown"
          href={PDF}
          target="_blank"
          rel="noreferrer"
        >
          Resume
          <BsBoxArrowUpRight className="downArrow" />
        </a>
      )}
      <ResumeBlock showDropDown={showDropDown} closeAll={closeAll} />
    </NavRoot>
  );
};

export default Nav;
