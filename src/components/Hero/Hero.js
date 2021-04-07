import React from "react";
import StyledHero from "./StyledHero";
import Text from "./Text/Text";
import Card from "./Card/Card";

const Hero = (props) => {
  return (
    <StyledHero>

      {/* <div className="one">div 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus, porro neque illum impedit, excepturi magni, aut sit libero dolor quia rem! Repellendus ipsam eaque inventore aut delectus corporis nemo iste doloribus, voluptates modi velit? Blanditiis illo possimus recusandae nesciunt commodi dicta exercitationem enim id obcaecati, vitae facere magni minima sed esse provident architecto iste!</div>
      <div className="two">div 2</div> */}
      <Text />
      <Card />
    </StyledHero>
  );
};

export default Hero;
