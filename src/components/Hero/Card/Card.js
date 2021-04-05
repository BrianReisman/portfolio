import React from "react";
import StyledCard from "./StyledCard";
import Headshot from '../../../assets/headshot.png';

const Card = (props) => {
  return (
    <StyledCard>

      <div className="container">

          <div className="photoBorder">
            <img src={Headshot} alt="Brian's headshot" />
          </div>

          <div className="text">
            <p>Stage actor turned Web Dev</p>
            <div className="line"></div>
            <p>Personal finance enthusiast</p>
            <div className="line"></div>
            <p>Travel junkie</p>
          </div>

        </div>

    </StyledCard>
  );
};

export default Card;
