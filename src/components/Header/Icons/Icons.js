import React from "react";
import StyledIcons from "./StyledIcons";
import { GitHub, LinkedIn } from "../../../assets/svgComponents";

const Icons = (props) => {
  return (
    <StyledIcons className='icons'>
      <GitHub />
      <LinkedIn />
    </StyledIcons>
  );
};

export default Icons;
