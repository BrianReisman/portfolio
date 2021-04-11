import React from "react";
import StyledProjectCard from "./StyledProjectCard";
import image from "../../../../assets/danielle-macinnes-IuLgi9PWETU-unsplash.jpg";

const ProjectCard = ({ data }) => {
  const clickHandler = () => {
    alert('I can\'t wait for this to take you somewhere awesome!' )
  }

  const test = data?.links?.map((link, i) => {
    if (i % 2 === 0) {
      return (
        <a
          className={link.className}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          onClick={clickHandler}
        >
          {link.display}
        </a>
      );
    } else {
      return <span className="pipe">||</span>;
    }

    // if(i % 2 === 1 && i !== 0){
    // return (
    // );
    // }else {
    //   return <h1>h</h1>
  });

  console.log(test);

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
