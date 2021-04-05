import React from "react";
import StyledWork from "./StyledWork";
import WorkContainer from './WorkContainer/WorkContainer';

const Work = (props) => {
  return (
    <StyledWork>
      <h2 id="work">Work</h2>
      <WorkContainer/>
      {/* buttons */}
    </StyledWork>
  );
};

export default Work;
