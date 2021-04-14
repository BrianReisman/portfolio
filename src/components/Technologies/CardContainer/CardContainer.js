import React from "react";
import StyledCardContainer from "./StyledCardContainer";
import FrontendCard from "./FrontendCard/FrontendCard";

const CardContainer = (props) => {
  return (
    <StyledCardContainer>
      <FrontendCard />
    </StyledCardContainer>
  );
};

export default CardContainer;
