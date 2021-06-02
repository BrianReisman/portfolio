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
        👉 Web Developer
        <a
          href="https://www.xenith.com/"
          target="_blank"
          rel="noreferrer"
          className="company"
        >
          {" "}
          @Xenith
        </a>
      </p>

      {/* <div
        id="placeholder"
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <p>
          Work on this page began 4.4.2021. It is not quite finished or mobile
          optomized yet.
        </p>
        <p>
          If you'd like to see my Figma wireframe take a look
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "tomato", fontSize: "2.4rem" }}
            href="https://www.figma.com/file/yFZyzaGVdErza5So9DB29a/Portfolio-Wireframe?node-id=0%3A1"
          >
            {" "}
            here{" "}
          </a>
          and{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "tomato", fontSize: "2.4rem" }}
            href="https://github.com/BrianReisman/portfolio"
          >
            {" "}
            here{" "}
          </a>{" "}
          is the repo for this site!
        </p>
      </div> */}
    </StyledText>
  );
};

export default Text;
