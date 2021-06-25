import React from 'react';
import StyledNav from './StyledNav';
import { BsCaretDown } from 'react-icons/bs';

const Nav = (props) => {
  return (
    <StyledNav>
      <button onClick={props.scrollClickHandler} className="work">
        Work
      </button>
      <button onClick={props.scrollClickHandler} className="me">
        Me
      </button>
      <button onClick={props.scrollClickHandler} className="connect">
        Connect
      </button>
      <button>
        Resume
        <BsCaretDown />
      </button>
    </StyledNav>
  );
};

export default Nav;
