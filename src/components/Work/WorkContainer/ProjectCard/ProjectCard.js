import React from "react";
import StyledProjectCard from "./StyledProjectCard";
import image from "../../../../assets/danielle-macinnes-IuLgi9PWETU-unsplash.jpg";

const ProjectCard = (props) => {
  return (
    <StyledProjectCard>
      <h3 className="cardSection">Junior JavaScript Developer Job Board</h3>

      <div className="projectCardMain cardSection">
        <img src={image} alt="project screenshot" />
        <p className="projectText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
          atque dolore assumenda incidunt pariatur, ipsum in expedita voluptate
          molestias numquam alias ipsam! Quam, inventore debitis! Pariatur ab
          dolorem blanditiis doloribus doloremque unde sed fuga ut quo nisi hic
          officiis ratione ea fugiat quam, sunt, commodi omnis sequi nobis
        </p>
      </div>

      <div className="links cardSection">
        <a className="deployment" href="/">
          Deployment Link
        </a>
        <span className="pipe">||</span>
        <a className="repo" href="/">
          Repo Link
        </a>
        <span className="pipe">||</span>
        <a className="demo" href="/">
          Demo Video
        </a>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
