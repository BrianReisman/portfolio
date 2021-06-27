import React, { useState } from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown } from 'react-icons/bs';
import ResumeBlock from '../module/ResumeBlock';
import { Overlay } from '../atom/Overlay';

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
        Resume
        <BsCaretDown className="test" />
      </Button>
      <ResumeBlock showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
      <Overlay
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
    </NavRoot>
  );
};

export default Nav;
