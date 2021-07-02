import React from 'react';
import { ModalRoot } from './StyledModal';

import Nav from '../../Nav/Nav';
// import Icons from "../../Header/Icons/Icons";

const Modal = ({ closeAll, scrollClickHandler, showResume }) => {
  return (
    <ModalRoot className="active">
      <div className="modal-header">
        <button className="close-button" onClick={closeAll}>
          &times;
        </button>
      </div>
      <Nav scrollClickHandler={scrollClickHandler} closeModal={closeAll} showResume={showResume} modal/>
      {/* <Icons /> */}
    </ModalRoot>
  );
};

export default Modal;
