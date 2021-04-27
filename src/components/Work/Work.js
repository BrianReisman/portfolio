import React from "react";
import StyledWork from "./StyledWork";
import WorkContainer from "./WorkContainer/WorkContainer";
import StyledTechnologies from "./Technologies/StyledTechnologies";
import CardContainer from "./Technologies/CardContainer";

const Work = (props) => {
  return (
    <StyledWork>
      <h2 ref={props.refType}>Work</h2>
      <WorkContainer />
      {/* <WorkContainer showExtraProjects={showExtraProjects} /> */}
      {/* buttons */}
      {/* {showExtraProjects ?
      <button onClick={clickHandler}>Get those extra projects outta here!</button>
      // null 
      : (
        <button onClick={clickHandler}>See two more projects</button>
      )} */}
      <StyledTechnologies>
        <h3>Technologies</h3>
        <CardContainer />
      </StyledTechnologies>
    </StyledWork>
  );
};

export default Work;
