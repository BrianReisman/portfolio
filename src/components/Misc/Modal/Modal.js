import React from 'react';
import { ModalRoot } from './StyledModal';

import Nav from '../../Nav/Nav';
// import Icons from "../../Header/Icons/Icons";

const Modal = ({ toggleModal, scrollClickHandler }) => {
  const closeModal = () => toggleModal();

  return (
    <ModalRoot className="active">
      <div className="modal-header">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
      </div>
      <Nav
        scrollClickHandler={scrollClickHandler}
        closeModal={closeModal}
      />
      {/* <Icons /> */}
    </ModalRoot>
  );
};

export default Modal;
