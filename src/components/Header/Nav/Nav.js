import React from "react";
import StyledNav from "./StyledNav";
import PDF from "../../../assets/Brian Reisman - Resume.pdf";

const Nav = (props) => {
  console.log(props);
  return (
    <StyledNav>
      <button onClick={props.navClickHandler} className="work">
        Work
      </button>
      <button onClick={props.navClickHandler} className="me">
        Me
      </button>
      <button onClick={props.navClickHandler} className="connect">
        Connect
      </button>
      <a href={PDF} target="_blank" rel="noreferrer">
        Resume
      </a>
    </StyledNav>
  );
};

export default Nav;
