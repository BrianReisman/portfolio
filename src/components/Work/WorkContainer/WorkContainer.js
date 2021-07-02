import React from "react";
import StyledWorkContainer from "./StyledWorkContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from '../projectInfo'

const Cards = (props) => {
  return (
    <StyledWorkContainer>
      {
        projects.map((project, i) => {
          return <ProjectCard key={i} data={project} />
        })
      }



      {/* <ProjectCard /> */}
      {/* {
        props.showExtraProjects ?
        <div>
          <ProjectCard id='twoMoreProjects'/>

          <ProjectCard id='twoMoreProjects'/>
        </div>
        : null
      } */}
    </StyledWorkContainer>
  );
};

export default Cards;
