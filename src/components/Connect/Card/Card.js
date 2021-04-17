import React from "react";
import StyledCard from "./StyledCard";
import { GitHub, LinkedIn } from "../../../assets/svgComponents";
import PDF from "../../../assets/Brian Reisman - Resume.pdf";

const Card = (props) => {
  return (
    <StyledCard>
      <p>
        Reaching out is unlikely to make me as happy as cheese delivery day on
        top of a glacier in the Yukon territory after not having eaten for two
        days. However, ...it’ll sure come close!
      </p>
      <p>
        I like to work alongside and surround myself with people who enjoy
        themselves and what they do. If that sounds like you, I hope you’ll
        reach out.{" "}
      </p>
      <p>
        <a className='email' href="mailto:brianreisman@protonmail.com">
          brianreisman@protonmail.com
        </a>{" "}
        || 856.520.1120
      </p>
      <p>
        Looking for a{" "}
        <a href={PDF} target="_blank" rel="noreferrer">
          resume?
        </a>
      </p>
      <div className="icons">
        <GitHub />
        <LinkedIn />
      </div>
    </StyledCard>
  );
};

export default Card;
