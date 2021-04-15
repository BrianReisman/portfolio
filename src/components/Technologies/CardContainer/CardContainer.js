import React from "react";
import StyledCardContainer from "./StyledCardContainer";
import FrontendCard from "./FrontendCard/FrontendCard";
import BackendCard from "./BackendCard/BackendCard";

const CardContainer = (props) => {
  return (
    <StyledCardContainer>
      <FrontendCard className='eachCard' />
      {/* <BackendCard className='eachCard' /> */}
    </StyledCardContainer>
  );
};

export default CardContainer;
