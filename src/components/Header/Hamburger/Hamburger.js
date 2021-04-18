import React from "react";
import StyledHamburger from "./StyledHamburger";

const Hamburger = (props) => {
  return (
    <StyledHamburger onClick={props.onClick}>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </StyledHamburger>
  );
};

export default Hamburger;
