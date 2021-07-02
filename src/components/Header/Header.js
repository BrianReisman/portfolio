import React from 'react';

import StyledHeader from './StyledHeader';
import Nav from '../Nav/Nav';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
// import Icons from './Icons/Icons';

const Header = ({
  showDropDown,
  displayModal,
  headerRef,
  scrollClickHandler,
  showResume,
}) => {
  return (
    <StyledHeader ref={headerRef}>
      <Logo scrollClickHandler={scrollClickHandler} />
      <Hamburger onClick={displayModal} />
      <Nav
        scrollClickHandler={scrollClickHandler}
        showDropDown={showDropDown}
        showResume={showResume}
      />
      {/* <Icons /> */}
    </StyledHeader>
  );
};

export default Header;
