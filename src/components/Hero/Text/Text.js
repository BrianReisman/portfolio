import React from "react";
import StyledText from "./StyledText";

const Text = (props) => {
  return (
    <StyledText>
      <h1>
        I<span className="punctuation">'</span>m <br /> Brian <br /> Reisman
        <span className="punctuation">.</span>
      </h1>
      <p>
        👉 Frontend Developer
        {/* <a
          href="https://codeshock.dev/"
          target="_blank"
          rel="noreferrer"
          className="company"
        >
          @Code Shock
        </a> */}
      </p>
      <p style={{
        width: '100%',
        padding: '10px'
        // textAlign: 'center'

      }}>Project and other fun coming soon! <br/> You can reach me directly @856.520.1120 or brianreisman@protonmail.com</p>

    </StyledText>
  );
};

export default Text;
