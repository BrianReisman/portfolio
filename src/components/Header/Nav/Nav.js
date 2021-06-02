import React from "react";
import StyledNav from "./StyledNav";
import PDF from "../../../assets/Brian Reisman - Resume.pdf";
// import Icons from "../../Header/Icons/Icons";

const Nav = (props) => {
  console.log(props)

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
      <a href={PDF} target="_blank" rel="noreferrer">
        Resume
      </a>
      {/* {props.icons && <Icons />} */}
    </StyledNav>
  );
};

export default Nav;
