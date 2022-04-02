import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div class="container text-center home-wrapper">
        <div class="row align-items-center my-3">
          <div class="col-lg-7 mt-3 mb-4">
            <img
              className="word-cloud"
              src="/images/word-cloud-weather.png"
              alt="LTM-avatar"
            />
          </div>
          <div class="col-lg-5 text-wrapper">
            <h1 class="font-weight-strong">Laura Menendez</h1>
            <h3 class="font-weight-light">[Junior Web Developer]</h3>
            <p>"Passionate about making aesthetically beautiful web apps."</p>
            <button
              class="btn resume-button"
              id="submit"
              type="submit"
              value="RESUME"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1qoGbPen1c3oxFSragpPHVhsCwfpNEn2o/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <div class="get-resume-button">
                <i class="fa fa-file"></i>
                <span class="get-resume">RESUME</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
