import React from "react";
import StyledMe from "./StyledMe";
// import Buttons from "./Buttons/Buttons";
// import Long from "./Cards/Long/Long";
import Short from "./Cards/Short/Short";

const Me = (props) => {
  // const [cardVersion] = useState('long');

  return (
    <StyledMe>
      <h2 id="me">Me</h2>
      <div>
        <Short />
      </div>
    </StyledMe>
  );
};

export default Me;
