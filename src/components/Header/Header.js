import React from 'react';

import StyledHeader from './StyledHeader';
import Nav from '../Nav/Nav';
import Logo from './Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
// import Icons from './Icons/Icons';

const Header = ({ showDropDown, setShowDropDown, toggleModal, headerRef, scrollClickHandler }) => {
  const clickHandler = () => {
    toggleModal();
  };

  return (
    <StyledHeader ref={headerRef}>
      <Logo scrollClickHandler={scrollClickHandler} />
      <Hamburger onClick={clickHandler} />
      <Nav
        scrollClickHandler={scrollClickHandler}
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
      />
      {/* <Icons /> */}
    </StyledHeader>
  );
};

export default Header;
