import React from "react";
import StyledImage from "./StyledImage";
import HappyCheese from "../../../assets/HappyCheese.png";
const Image = (props) => {
  return (
    <StyledImage>
      <img src={HappyCheese} alt="happy me with cheese" />
    </StyledImage>
  );
};

export default Image;
