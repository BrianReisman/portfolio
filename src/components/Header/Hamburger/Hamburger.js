import React from 'react';
import StyledHamburger from './StyledHamburger';

const Hamburger = ({ onClick }) => (
  <StyledHamburger onClick={onClick}>
    <div className="row"></div>
    <div className="row"></div>
    <div className="row"></div>
  </StyledHamburger>
);

export default Hamburger;
