import React from "react";
import StyledModal from "./StyledModal";

import Nav from "../../Header/Nav/Nav";

const Modal = (props) => {
  const closeModal = () => props.toggleModal();

  return (
    <StyledModal className="active">
      <div className="modal-header">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
      </div>
      <Nav
        scrollClickHandler={props.scrollClickHandler}
        closeModal={closeModal}
        icons
      />
    </StyledModal>
  );
};

export default Modal;
