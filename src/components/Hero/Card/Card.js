import React from "react";
import StyledCard from "./StyledCard";
import Headshot from "../../../assets/headshotraw.png";

const Card = (props) => (
  <StyledCard>
    <div className="card">

      <img src={Headshot} alt="Brian's headshot" />

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

export default Card;
