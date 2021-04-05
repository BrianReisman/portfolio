import React from "react";
import StyledWorkContainer from "./StyledWorkContainer";
import ProjectCard from "./ProjectCard/ProjectCard";

const Cards = (props) => {
  return (
    <StyledWorkContainer>
      <ProjectCard />
      <ProjectCard />
    </StyledWorkContainer>
  );
};

export default Cards;
