import React from "react";
// import node from "../../../../assets/Technologies/node.svg";
// import express from "../../../../assets/Technologies/express.svg";
// import knex from "../../../../assets/Technologies/Vector.svg";
// import sqlite from "../../../../assets/Technologies/Component 2.svg";

// import node from "../../../../assets/Technologies/blackAndWhite/nodejs-seeklogo.com 2.svg";
// import express from "../../../../assets/Technologies/blackAndWhite/express-js-seeklogo.com 2.svg";
// import knex from "../../../../assets/Technologies/blackAndWhite/Vector.svg";
// import sqlite from "../../../../assets/Technologies/blackAndWhite/Component 3.svg";

import node from "../../../../assets/Technologies/Orange/node-ORANGE.svg";
import express from "../../../../assets/Technologies/Orange/express-ORANGE.svg";
import knex from "../../../../assets/Technologies/Orange/Knex-ORANGE.svg";
import sqlite from "../../../../assets/Technologies/Orange/SQLite3-ORANGE.svg";

const Backendcard = ({ className }) => {
  return (
    <div className={className}>
      <h4>Backend:</h4>
      <section>
        <span>
          <img src={node} alt="NodeJS logo" />
          <p>NodeJS</p>
        </span>
        <span>
          <img src={express} alt="Express logo" />
          <p>Express</p>
        </span>
        <span>
          <img src={knex} alt="Knex logo" />
          <p>Knex</p>
        </span>
        <span>
          <img src={sqlite} alt="SQLite logo" />
          <p>SQLite</p>
        </span>
      </section>
    </div>
  );
};

export default Backendcard;
