import React from "react";
import { ModalRoot } from "./StyledModal";

import Nav from "../../Nav/Nav";
import Icons from "../../Header/Icons/Icons";

const Modal = (props) => {
  const closeModal = () => props.toggleModal();

  return (
    <ModalRoot className="active">
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
      {/* <Icons /> */}
    </ModalRoot>
  );
};

export default Modal;
