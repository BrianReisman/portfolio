import React from "react";
import StyledFrontendCard from "./StyledFrontendCard";

// logo SVGs - COLOR
// import html from "../../../../assets/Technologies/html.svg";
// import css from "../../../../assets/Technologies/css.svg";
// import javascript from "../../../../assets/Technologies/javascript.svg";
// import react from "../../../../assets/Technologies/react.svg";
// import redux from "../../../../assets/Technologies/redux.svg";
// import styledComponents from "../../../../assets/Technologies/_💅_.svg";

// logo SVGs - B+W
import html from "../../../../assets/Technologies/blackAndWhite/html5-without-wordmark-color 2.svg";
import css from "../../../../assets/Technologies/blackAndWhite/css3 logo.svg";
import javascript from "../../../../assets/Technologies/blackAndWhite/javascript-js-seeklogo.com 4.svg";
import react from "../../../../assets/Technologies/blackAndWhite/Group 20.svg";
import redux from "../../../../assets/Technologies/blackAndWhite/Group.svg";
import styledComponents from "../../../../assets/Technologies/blackAndWhite/styled-component.svg";

const FrontendCard = (props) => {
  return (
    <StyledFrontendCard>
      <h4>Frontend:</h4>
      <div className="logos">
        <span>
          <img src={html} alt="html logo" />
          <p>HTML</p>
        </span>
        <span>
          <img src={css} alt="css logo" /> <p>CSS</p>
        </span>
        <span>
          <img src={javascript} alt="javascript logo" />
          <p>JavaScript</p>
        </span>
        <span>
          <img src={react} alt="react logo" />
          <p>React</p>
        </span>
        <span>
          <img src={redux} alt="redux logo" />
          <p>Redux</p>
        </span>
        <span>
          <img src={styledComponents} alt="styledComponents logo" />
          <p>
            Styled-
            <br />
            Components
          </p>
        </span>
      </div>
    </StyledFrontendCard>
  );
};

export default FrontendCard;
