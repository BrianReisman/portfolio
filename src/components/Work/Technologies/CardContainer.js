import React from "react";
import StyledCardContainer from "./StyledCardContainer";
import FrontendCard from "./cards/FrontendCard";
import BackendCard from "./cards/BackendCard";
import Tools from "./cards/Tools";

const CardContainer = (props) => {
  return (
    <StyledCardContainer>
      <FrontendCard className="eachCard" />
      <BackendCard className="eachCard" />
      <Tools className="eachCard" />
    </StyledCardContainer>
  );
};

export default CardContainer;
