import React from "react";
import StyledHero from "./StyledHero";
import Text from "./Text/Text";
import Card from "./Card/Card";

const Hero = (props) => {
  return (
    <StyledHero>
      <Text />
      <Card />
    </StyledHero>
  );
};

export default Hero;
