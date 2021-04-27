import React from "react";
import StyledMe from "./StyledMe";
// import Buttons from "./Buttons/Buttons";
// import Long from "./Cards/Long/Long";
import Short from "./Cards/Short/Short";
// import arrowMe from "../../assets/ArrowMe.svg";
const Me = (props) => {
  // const [cardVersion] = useState('long');

  return (
    <StyledMe>
      <h2 ref={props.meRef}>Me</h2>
      {/* <div className="aside">
        <p>
          7 questions <br /> answered in 7 words
        </p>
        <img src={arrowMe} alt="arrow" />
      </div> */}
      {/* <p>7 questions answered in 7 words* <br/> *because who has time for 21?</p> */}
      <div>
        <Short />
      </div>
    </StyledMe>
  );
};

export default Me;
