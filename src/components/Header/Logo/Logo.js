import React from "react";
import StyledLogo from "./StyledLogo";
import { LogoSVG } from "../../../assets/svgComponents";

const Logo = (props) => {
  return (
    <StyledLogo>
      <LogoSVG />
    </StyledLogo>
  );
};

export default Logo;
