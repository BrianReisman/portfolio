import React from "react";
import StyledNav from "./StyledNav";
import { GitHub, LinkedIn } from "../../../assets/svgComponents";
import PDF from '../../../assets/Brian Reisman - Resume.pdf';

const Nav = (props) => {
  return (
    <StyledNav>
      <a href="#work">Work</a>
      <a href="#work">Me</a>
      <a href="#work">Contact</a>
      <a href={PDF} target='_blank' rel="noreferrer">Resume</a>
      <div className="icons">
        <GitHub />
        <LinkedIn />
      </div>
    </StyledNav>
  );
};

export default Nav;
