import React from "react";
import StyledTools from "./StyledTools";

// import figma from "../../../../assets/Technologies/figma.svg";
// import git from "../../../../assets/Technologies/git.svg";
// import github from "../../../../assets/Technologies/github.svg";

// import figma from "../../../../assets/Technologies/blackAndWhite/figma-1 logo.svg";
// import git from "../../../../assets/Technologies/blackAndWhite/git-seeklogo.com 2.svg";
// import github from "../../../../assets/Technologies/blackAndWhite/github-seeklogo.com 2.svg";

import figma from "../../../../assets/Technologies/Orange/Figma-ORANGE.svg";
import git from "../../../../assets/Technologies/Orange/Git-ORANGE.svg";
import github from "../../../../assets/Technologies/Orange/GitHub-ORANGE.svg";

const Tools = ({className}) => {
  return (
    <StyledTools className={className}>
      <h4>Industry Tools:</h4>
      <section >
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
      </section>
    </StyledTools>
  );
};

export default Tools;
