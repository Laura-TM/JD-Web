import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 text-center">
          <img
              className="avatar"
              src="/images/cartoonify-large.png"
              alt="LTM-avatar"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light text-center pt-3">Who am I ?</h1>
            <p class="pt-3">
              ¡Hola a todos! I am Laura, a junior web developer based in London.
              I love making aesthetically beautiful web applications that help
              others in their pursues of life. I also enjoy traveling,
              languages, making films and being outdoors. Previously, I have
              worked as a teacher in London schools and assistant producer for
              TV shows filmed in Europe. My biggest regret is not being able to
              change the world. Generally speaking, I am reliable and eager to
              learn; with good attention to detail and organisation skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
