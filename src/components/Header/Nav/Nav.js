import React from "react";
import StyledNav from "./StyledNav";
import {GitHub, LinkedIn} from "../../../assets/svgComponents";

const Nav = (props) => {
  return (
    <StyledNav>
      <a href="/">Work</a>
      <a href="/">Me</a>
      <a href="/">Contact</a>
      <a href="/">Resume</a>
      <GitHub/>
      <LinkedIn/>
    </StyledNav>
  );
};

export default Nav;
