import React, { useState } from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import ResumeDropDown from '../module/ResumeBlock';

const Nav = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <NavRoot>
      <Button onClick={props.scrollClickHandler} className="work">
        Work
      </Button>
      <Button onClick={props.scrollClickHandler} className="me">
        Me
      </Button>
      <Button onClick={props.scrollClickHandler} className="connect">
        Connect
      </Button>
      <Button className="dropdown" onClick={toggleDropDown}>
        <HiDownload className="test" />
        Resume
        <BsCaretDown />
      </Button>
        <ResumeDropDown showDropDown={showDropDown} />
    </NavRoot>
  );
};

export default Nav;
