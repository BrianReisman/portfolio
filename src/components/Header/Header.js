import React, { useState } from "react";

import StyledHeader from "./StyledHeader";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import Icons from "./Icons/Icons";
// import Modal from "../Misc/Modal/Modal";

const Header = (props) => {
  const [showModal] = useState(false);

  const clickHandler = () => {
    alert("Are you as excited as I am for this modal to be up and running!");
    // setShowModal(!showModal);
  };

  return (
    <StyledHeader ref={props.headerRef}>
      <Logo scrollClickHandler={props.scrollClickHandler}/>
      {!showModal && <Hamburger onClick={clickHandler} />}
      {/* {showModal && <Modal />} */}
      <Nav scrollClickHandler={props.scrollClickHandler} />
      <Icons />
    </StyledHeader>
  );
};

export default Header;
