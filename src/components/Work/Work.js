// import React, { useState } from "react";
import React from "react";
import StyledWork from "./StyledWork";
import WorkContainer from "./WorkContainer/WorkContainer";

const Work = (props) => {
  // const [showExtraProjects, setShowExtraProjects] = useState(false);

  // const clickHandler = (e) => {
  //   setShowExtraProjects(!showExtraProjects);
  // };

  return (
    <StyledWork>
      <h2 id="work">Work</h2>
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
