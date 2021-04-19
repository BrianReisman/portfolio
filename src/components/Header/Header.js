import React, { useState } from "react";

import StyledHeader from "./StyledHeader";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import Icons from "./Icons/Icons";
// import Modal from "./Modal/Modal";

const Header = (props) => {
  const [showModal] = useState(false);

  const clickHandler = () => {
    alert("Are you as excited as I am for this modal to be up and running!");
    // setShowModal(!showModal);
  };

  return (
    <StyledHeader id="top">
      <Logo />
      {!showModal && <Hamburger onClick={clickHandler} />}
      {/* {showModal && <Modal />} */}
      <Nav navClickHandler={props.navClickHandler} />
      <Icons />
    </StyledHeader>
  );
};

export default Header;
