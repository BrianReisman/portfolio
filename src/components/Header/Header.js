import React from "react";

import StyledHeader from "./StyledHeader";
import Nav from "./Nav/Nav";

const Header = (props) => {
  return (
    // #top is for bookmark in scrolling
    <StyledHeader id="top">
      <Nav />
    </StyledHeader>
  );
};

export default Header;
