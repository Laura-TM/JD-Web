import React from "react";
import "./skillsgrid.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { MdDevicesOther, MdSettingsAccessibility } from "react-icons/md";

function SkillsGrid() {
  return (
      <div className="skills-grid">
        <div className="skills-tool-logo">
          <IoLogoJavascript />
          <h3 className="skills-tool-label">Javascript</h3>
        </div>
        <div className="skills-tool-logo">
          <IoLogoHtml5 />
          <h3 className="skills-tool-label">HTML5</h3>
        </div>
        <div className="skills-tool-logo">
          <IoLogoCss3 />
          <h3 className="skills-tool-label">CSS3</h3>
        </div>
        <div className="skills-tool-logo">
          <FaReact />
          <h3 className="skills-tool-label">React</h3>
        </div>
        <div className="skills-tool-logo">
          <FaGitAlt />
          <h3 className="skills-tool-label">Git</h3>
        </div>
        <div className="skills-tool-logo">
          <FaGithub />
          <h3 className="skills-tool-label">Github</h3>
        </div>
        <div className="skills-tool-logo">
          <SiVisualstudio />
          <h3 className="skills-tool-label">VS Code</h3>
        </div>
        <div className="skills-tool-logo">
          <MdDevicesOther />
          <h3 className="skills-tool-label">Responsive</h3>
        </div>
        <div className="skills-tool-logo">
          <MdSettingsAccessibility />
          <h3 className="skills-tool-label">Accessibility</h3>
        </div>
      </div>
  );
}

export default SkillsGrid;