import React from "react";
import StyledTools from "./StyledTools";

import figma from "../../../../assets/Technologies/figma.svg";
import git from "../../../../assets/Technologies/git.svg";
import github from "../../../../assets/Technologies/github.svg";

const Tools = (props) => {
  return (
    <StyledTools>
      <h4>Industry Tools:</h4>
      <div className="logos">
        <span>
          <img src={figma} alt="figma logo" />
          <p>Figma</p>
        </span>
        <span>
          <img src={git} alt="git logo" />
          <p>Git</p>
        </span>
        <span>
          <img src={github} alt="github logo" />
          <p>GitHub</p>
        </span>
      </div>
    </StyledTools>
  );
};

export default Tools;
