import React from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown } from 'react-icons/bs';
import ResumeBlock from '../module/ResumeBlock';

const Nav = ({ scrollClickHandler, showDropDown, showResume, closeAll }) => (
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

    <Button className="dropdown" onClick={showResume}>
      Resume
      <BsCaretDown className="downArrow" />
    </Button>
    <ResumeBlock showDropDown={showDropDown} closeAll={closeAll} />
  </NavRoot>
);

export default Nav;
