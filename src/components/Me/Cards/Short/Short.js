import React from "react";
import StyledShort from "./StyledShort";
const Short = (props) => {
  return (
    <StyledShort>
      <ul>
        <p>What are you doing now?</p>
        <li>Working with the awesome team at Xenith.</li>
        <p>Why tech?</p>
        <li>Teamwork, constant learning, making things, solving problems.</li>
        <p>So, what's next?</p>
        <li>Strengthening backend (Node) and frontend (Server-side rendering)</li>
        <p>What's important to you in a job?</p>
        <li>Good people, product, and process + remote compatible.</li>
        <p>Aside from programming, what else do you enjoy?</p>
        <li>Theater, travel, tea, alliteration, and Muji pens.</li>
        <p>Any travel in particular on your mind?</p>
        <li>
          Thank you for asking! Fantasizing about{" "}
          <a
            href="https://www.alpacaexpeditions.com/inca-trail-expedition-5d4n/"
            target="_blank"
            rel="noreferrer"
          >
            this...
          </a>
        </li>
        <p>Your background is in theater?!</p>
        <li>You think closures are heady? Try Shakespeare.</li>
      </ul>
    </StyledShort>
  );
};

export default Short;
