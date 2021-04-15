import React from "react";
import StyledCardContainer from "./StyledCardContainer";
import FrontendCard from "./FrontendCard/FrontendCard";
import BackendCard from "./BackendCard/BackendCard";
import Tools from "./IndustryToolsCard/Tools";

const CardContainer = (props) => {
  return (
    <StyledCardContainer>
      <FrontendCard className="eachCard" />
      <BackendCard className="eachCard" />
      <Tools />
    </StyledCardContainer>
  );
};

export default CardContainer;
