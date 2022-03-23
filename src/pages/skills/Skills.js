import React from "react";
import "./skills.css";
import SkillsGrid from "./SkillsGrid";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-intro">
        My current toolbox is in development and it includes:
      </h1>
      <SkillsGrid />
    </div>
  );
}

export default Skills;
