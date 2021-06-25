import React from 'react';
import { NavRoot, Button } from './Nav.elements';
import { BsCaretDown } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

const Nav = (props) => {
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
      <Button>
        <HiDownload className='test'/>
        Resume
        <BsCaretDown />
      </Button>
    </NavRoot>
  );
};

export default Nav;
