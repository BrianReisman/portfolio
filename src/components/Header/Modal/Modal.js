import React from "react";
import StyledModal from "./StyledModal";

import Nav from "../Nav/Nav";

const Modal = (props) => {
  return (
    <StyledModal>
      {/* <a href="#work">Work</a>
      <a href="#me">Me</a>
      <a href="#connect">Connect</a>
      <a href={PDF} target="_blank" rel="noreferrer">
        Resume
      </a> */}
      <Nav />
    </StyledModal>
  );
};

export default Modal;
