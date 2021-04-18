import React from "react";
import StyledNav from "./StyledNav";
import PDF from '../../../assets/Brian Reisman - Resume.pdf';

const Nav = (props) => {
  return (
    <StyledNav>
      <a href="#work">Work</a>
      <a href="#me">Me</a>
      <a href="#connect">Connect</a>
      <a href={PDF} target='_blank' rel="noreferrer">Resume</a>
    </StyledNav>
  );
};

export default Nav;
