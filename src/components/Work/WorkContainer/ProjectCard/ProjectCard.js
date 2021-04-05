import React from 'react';
import StyledProjectCard from './StyledProjectCard';
import image from "../../../../assets/emile-seguin-R9OueKOtGGU-unsplash.jpg"

const ProjectCard = (props) => {
  return(
    <StyledProjectCard>
      <div className="projectCardTitle">
        <h3>Junior JavaScript Developer Job Board</h3>
        <p>Dec. 2020 - <i>present</i></p>
      </div>
    <div className="projectCardMain">
      <img src={image} alt=""/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, atque dolore assumenda incidunt pariatur, ipsum in expedita voluptate molestias numquam alias ipsam! Quam, inventore debitis! Pariatur ab dolorem blanditiis doloribus doloremque unde sed fuga ut quo nisi hic officiis ratione ea fugiat quam, sunt, commodi omnis sequi nobis, modi aperiam? Ad optio debitis quam esse quaerat sint quia mollitia quasi, natus saepe quae similique officiis dolore?</p>
    </div>
      {/* links */}
    </StyledProjectCard>
)
};

export default ProjectCard;
