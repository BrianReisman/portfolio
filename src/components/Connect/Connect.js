import React from "react";
import { ConnectRoot, ConnectContainer } from "./Connect.elements";
import Image from "./Image/Image";
import Card from "./Card/Card";

const Connect = (props) => {
  return (
    <ConnectRoot>
      <h2 ref={props.refType}>Connect</h2>
      <ConnectContainer>
        <Image />
        <Card />
      </ConnectContainer>
    </ConnectRoot>
  );
};

export default Connect;
