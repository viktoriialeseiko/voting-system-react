import React from "react";
import "./team.css";

const Team = ({ src, name, voteCount, func, className }) => {
  return (
    <div className={`wrapper ${className}`}>
      <img src={src} alt="team logo" />
      <h3>{name}</h3>
      <button onClick={() => func(name)}>Vote</button>
      <p>Vote Count: {voteCount}</p>
    </div>
  );
};
export default Team;
