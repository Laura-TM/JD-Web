import React from "react";
import "./skills.css";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiVisualstudio, SiCypress, SiPostgresql, SiPostman, SiElastic, SiTrustpilot } from "react-icons/si";
import { MdDevicesOther, MdSettingsAccessibility } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { GrTroubleshoot } from "react-icons/gr";
import { GiSandsOfTime } from "react-icons/gi";

function SkillsHeading() {
  return (
    <>
      <div class="block-pages-index text-center">
        <div class="section-news">
          <div class="container-fluid">
            <div class="row py-4 mt-1 mt-md-3 mt-lg-4">
              <div class="col-md-12 pt-60px pb-60px">
                <h2>My current toolbox is in development and it includes:</h2>
              </div>
            </div>

            <div class="row m-1 m-md-3 m-lg-5">
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <IoLogoJavascript class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Javascript</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <IoLogoHtml5 class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">HTML5</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <IoLogoCss3 class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">CSS3</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <FaBootstrap class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Bootstrap</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <FaReact class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">React</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <SiCypress class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Cypress</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <SiPostgresql class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">SQL</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <FaGitAlt class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Git</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <FaGithub class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Github</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <SiVisualstudio class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">VS Code</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <SiPostman class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Postman</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <MdDevicesOther class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Responsive</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <MdSettingsAccessibility class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Accessibility</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <RiTeamLine class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Teamwork</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <GrTroubleshoot class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Troubleshooting</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <GiSandsOfTime class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Organisation</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item">
                  <SiElastic class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3">Flexibility</h4>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 mb-3">
                <div class="item mb-5">
                  <SiTrustpilot class="img-thumbnail skills-tool-logo" />
                  <h4 class="mt-3 last-label">Trustworthy</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsHeading;
