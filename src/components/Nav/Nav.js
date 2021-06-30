import React from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown } from 'react-icons/bs';
import ResumeBlock from '../module/ResumeBlock';

const Nav = ({ scrollClickHandler, showDropDown, setShowDropDown }) => {
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <NavRoot>
      <Button onClick={scrollClickHandler} className="work">
        Work
      </Button>
      <Button onClick={scrollClickHandler} className="me">
        Me
      </Button>
      <Button onClick={scrollClickHandler} className="connect">
        Connect
      </Button>

      <Button className="dropdown" onClick={toggleDropDown}>
        Resume
        <BsCaretDown className="test" />
      </Button>
      <ResumeBlock showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
    </NavRoot>
  );
};

export default Nav;
