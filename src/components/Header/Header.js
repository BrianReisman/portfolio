import React, { useState } from "react";

import StyledHeader from "./StyledHeader";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import Icons from "./Icons/Icons";
import Modal from "./Modal/Modal";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const clickHandler = () => {
    alert("hamburger clicked");
    setShowModal(!showModal);
  };

  return (
    <StyledHeader id="top">
      <Logo />
      {!showModal && <Hamburger onClick={clickHandler} />}
      {showModal && <Modal />}
      <Nav />
      <Icons />
    </StyledHeader>
  );
};

export default Header;
