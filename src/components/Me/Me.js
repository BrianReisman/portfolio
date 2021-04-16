import React from "react";
import StyledMe from "./StyledMe";
import Buttons from "./Buttons/Buttons";

const Me = (props) => {
  return (
    <StyledMe>
      <h2 id="me">Me</h2>
      <Buttons/>
      {/* text */}
    </StyledMe>
  );
};

export default Me;
