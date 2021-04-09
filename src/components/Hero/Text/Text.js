import React from "react";
import StyledText from "./StyledText";

const Text = (props) => {
  return (
    <StyledText>
      <h1>
        I<span className="punctuation">'</span>m <br /> Brian <br /> Reisman
        <span className="punctuation">.</span>
      </h1>
      {/* <p>
        👉 Frontend Developer
        <a
          href="https://codeshock.dev/"
          target="_blank"
          rel="noreferrer"
          className="company"
        >
          {" "}
          @Code Shock
        </a>
      </p> */}

      <div
        style={{
          // border: "1px solid blue",
          // fontWeight: "bold",
          textAlign: "center",
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <p>
          If you'd like to take a look at what's to come,
          <a
            style={{ color: "tomato", fontSize: "2.4rem" }}
            href="https://www.figma.com/file/yFZyzaGVdErza5So9DB29a/Portfolio-Wireframe?node-id=0%3A1"
          >
            {" "}
            here{" "}
          </a>
          is my wireframe and{" "}
          <a
            style={{ color: "tomato", fontSize: "2.4rem" }}
            href="https://github.com/BrianReisman/portfolio"
          >
            {" "}
            here{" "}
          </a>{" "}
          is the repo for this site!
        </p>
        <p>
          Work on this page began on 4.4.2021 and is not finished or mobile
          optomized yet <br />
        </p>
        <p>
          If you'd like, you can reach me directly @856.520.1120 or
          brianreisman@protonmail.com
        </p>
      </div>
    </StyledText>
  );
};

export default Text;
