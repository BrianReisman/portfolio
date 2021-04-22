import React from "react";
import StyledModal from "./StyledModal";

import Nav from "../../Header/Nav/Nav";

const Modal = (props) => {
  return (
    <StyledModal>
      <div className="modal-header">
        <div className="title">Model title</div>
        <button className="close-button">&times;</button>
      </div>

      <Nav scrollClickHandler={props.scrollClickHandler} />
    </StyledModal>
  );
};

export default Modal;
