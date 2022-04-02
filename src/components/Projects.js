import React from "react";
// https://codepen.io/maryj25/pen/axBNVO

function SkillsHeading() {
  return (
    <>
      <div class="container-fluid text-center py-4">
        <h2 class="mt-3 mb-5">Here you can see some of my work:</h2>
        {/* <p class="font-italic text-muted mb-3">
          This is some of the work completed through the learning journey.
        </p> */}

        <div class="row pb-5 mb-4">
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 mb-lg-0">
            <div class="card shadow-sm border-0 rounded">
              <div class="card-body p-0">
                <img
                  src="/images/project-slackdashboard-cyf.png"
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-4">
                  <h5 class="mb-0">Slack Dashboard</h5>
                  <p class="small text-muted">
                    Group project to track students' engagement.
                  </p>
                  <p class="small">Javascript, Material UI, and others</p>
                  <a
                    href="https://ldn7-slackdashbord.herokuapp.com/"
                    class="btn btn-warning mr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fas fa-link"></i> Live demo
                  </a>
                  <a
                    href="https://github.com/Laura-TM/ldn7-slackdashbord"
                    class="btn btn-warning"
                  >
                    <i class="fab fa-github"></i> Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 mb-lg-0">
            <div class="card shadow-sm border-0 rounded">
              <div class="card-body p-0">
                <img
                  src="/images/project-hotel-web.png"
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-4">
                  <h5 class="mb-0">Hotel website</h5>
                  <p class="small text-muted">
                    Generated a site with bookings and suggestions.
                  </p>
                  <p class="small">React</p>
                  <a
                    href="https://cyf-laura-tm-hotel-react.netlify.app/"
                    class="btn btn-warning mr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fas fa-link"></i> Live demo
                  </a>
                  <a
                    href="https://github.com/Laura-TM/cyf-hotel-react"
                    class="btn btn-warning"
                  >
                    <i class="fab fa-github"></i> Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 mb-lg-0">
            <div class="card shadow-sm border-0 rounded">
              <div class="card-body p-0">
                <img
                  src="/images/project-t-shirt-form.png"
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-4">
                  <h5 class="mb-0">Accessible Form</h5>
                  <p class="small text-muted">
                    Created a responsible, accessible form.
                  </p>
                  <p class="small">CSS, HTML, Lighthouse 100</p>
                  <a
                    href="https://multitudes-html-css-form.netlify.app/"
                    class="btn btn-warning mr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fas fa-link"></i> Live demo
                  </a>
                  <a
                    href="https://github.com/Laura-TM/multitudes-HTML-CSS-form"
                    class="btn btn-warning"
                  >
                    <i class="fab fa-github"></i> Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 mb-lg-0">
            <div class="card shadow-sm border-0 rounded">
              <div class="card-body p-0">
                <img
                  src="/images/project-tv-recommendation.png"
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-4">
                  <h5 class="mb-0">TV Recommendation Site</h5>
                  <p class="small text-muted">Produced a TV showcase site.</p>
                  <p class="small">Javascript, HTML, CSS</p>
                  <a
                    href="https://cyf-laura-tm-tv.netlify.app/"
                    class="btn btn-warning mr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fas fa-link"></i> Live demo
                  </a>
                  <a
                    href="https://github.com/Laura-TM/tv-show-dom-project"
                    class="btn btn-warning"
                  >
                    <i class="fab fa-github"></i> Github
                  </a>
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
