import React from 'react';

import StyledHeader from './StyledHeader';
import Nav from '../Nav/Nav';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
// import Icons from './Icons/Icons';

const Header = ({
  scrollClickHandler,
  headerRef,
  displayModal,
  showDropDown,
  showResume,
  closeAll
}) => {
  return (
    <StyledHeader ref={headerRef}>
      <Logo scrollClickHandler={scrollClickHandler} />
      <Hamburger onClick={displayModal} />
      <Nav
        scrollClickHandler={scrollClickHandler}
        showDropDown={showDropDown}
        showResume={showResume}
        closeAll={closeAll}
      />
      {/* <Icons /> */}
    </StyledHeader>
  );
};

export default Header;
