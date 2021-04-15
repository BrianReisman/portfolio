import React from "react";
import StyledBackendcard from "./StyledBackendcard";
import node from "../../../../assets/Technologies/node.svg";
import express from "../../../../assets/Technologies/express.svg";
import knex from "../../../../assets/Technologies/Vector.svg";
import sqlite from "../../../../assets/Technologies/Component 2.svg";

const Backendcard = (props) => {
  return (
    <StyledBackendcard>
      <h4>Backend:</h4>
      <div className="logos">
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
      </div>
    </StyledBackendcard>
  );
};

export default Backendcard;
