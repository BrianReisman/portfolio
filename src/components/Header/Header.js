import React from "react";

import StyledHeader from "./StyledHeader";
import Nav from "../Nav/Nav";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import Icons from "./Icons/Icons";

const Header = (props) => {
  const clickHandler = () => {
    props.toggleModal()
  };

  return (
    <StyledHeader ref={props.headerRef}>
      <Logo scrollClickHandler={props.scrollClickHandler}/>
      <Hamburger onClick={clickHandler} />
      <Nav scrollClickHandler={props.scrollClickHandler} />
      <Icons />
    </StyledHeader>
  );
};

export default Header;
