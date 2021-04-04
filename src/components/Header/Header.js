import React from "react";

import StyledHeader from "./StyledHeader";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";

const Header = (props) => {
  return (
    // top is for bookmark in scrolling
    <StyledHeader id="top">
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
