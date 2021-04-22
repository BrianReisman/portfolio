import React from "react";
import StyledWork from "./StyledWork";
import WorkContainer from "./WorkContainer/WorkContainer";

const Work = (props) => {

  return (
    <StyledWork>
      <h2 ref={props.workRef}>Work</h2>
      <WorkContainer />
      {/* <WorkContainer showExtraProjects={showExtraProjects} /> */}
      {/* buttons */}
      {/* {showExtraProjects ?
      <button onClick={clickHandler}>Get those extra projects outta here!</button>
      // null 
      : (
        <button onClick={clickHandler}>See two more projects</button>
      )} */}
    </StyledWork>
  );
};

export default Work;
