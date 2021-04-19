import React from "react";
import StyledConnect from "./StyledConnect";
import Image from "./Image/Image";
import Card from "./Card/Card";

const Connect = (props) => {
  return (
    <StyledConnect>
      <h2 ref={props.connectRef}>Connect</h2>
      <div className="connectContainer">
        <Image />
        <Card />
      </div>
    </StyledConnect>
  );
};

export default Connect;
