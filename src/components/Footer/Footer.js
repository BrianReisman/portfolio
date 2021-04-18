import React from "react";
import StyledFooter from "./StyledFooter";

const Footer = (props) => {
  return (
    <StyledFooter>
      <p>
        Built by Brian 2021. ||{" "}
        <a
          href="https://github.com/BrianReisman/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          repo
        </a>{" "}
        || Brought to you in part by electricity.
      </p>
    </StyledFooter>
  );
};

export default Footer;
