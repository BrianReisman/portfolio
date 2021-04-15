import React from "react";
import StyledProjectCard from "./StyledProjectCard";
import image from "../../../../assets/danielle-macinnes-IuLgi9PWETU-unsplash.jpg";

const ProjectCard = ({ data }) => {
  const test = data?.links?.map((link, i) => {
    if (i % 2 === 0) {
      return (
        // <a
        //   key={i}
        //   className={link.className}
        //   href={link.href}
        //   target="_blank"
        //   rel="noreferrer"
        // >
        <p key={i}>
          {link.display}
        </p>
        // {/* </a> */}
      );
    } else {
      return (
        <span key={i} className="pipe">
          ||
        </span>
      );
    }
  });

  // console.log(test);

  return (
    <StyledProjectCard>
      <h3 className="cardSection">{data.title}</h3>

      <div className="projectCardMain cardSection">
        <img src={image} alt={`Screenshot of ${data.title}`} />
        <p className="projectText">{data.text}</p>
      </div>

      <div className="links cardSection">
        {test && test}
        {/* <span className="pipe">||</span> */}
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
