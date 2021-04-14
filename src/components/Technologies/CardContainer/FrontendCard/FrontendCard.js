import React from "react";
import StyledFrontendCard from "./StyledFrontendCard";

// logo SVGs
import html from "../../../../assets/Technologies/html.svg";
import css from "../../../../assets/Technologies/css.svg";
import javascript from "../../../../assets/Technologies/javascript.svg";
import react from "../../../../assets/Technologies/react.svg";
import redux from "../../../../assets/Technologies/redux.svg";
import styledComponents from "../../../../assets/Technologies/_💅_.svg";

const FrontendCard = (props) => {
  return (
    <StyledFrontendCard>
      <h4>Frontend:</h4>
      <div className="row1">
        <label htmlFor="">
          <img src={html} alt="html logo" /> html
        </label>
        <img src={css} alt="css logo" />
        <img src={javascript} alt="javascript logo" />
      </div>
      <div className="row2">
        <img src={react} alt="react logo" />
        <img src={redux} alt="redux logo" />
        <img src={styledComponents} alt="styledComponents logo" />
      </div>
    </StyledFrontendCard>
  );
};

export default FrontendCard;
