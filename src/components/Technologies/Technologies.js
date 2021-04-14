import React from "react";
import StyledTechnologies from "./StyledTechnologies";
import CardContainer from "./CardContainer/CardContainer";

// logos
import knexLogo from "../../assets/Technologies/Vector.svg";

const Technologies = (props) => {
  return (
    <StyledTechnologies>
      <h3>Technologies</h3>
      <CardContainer />
    </StyledTechnologies>
  );
};

export default Technologies;
