import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <section class="container-fluid text-center mt-3">
        {/* <h1 className="section-header">Let's talk!</h1> */}

        <div className="contact-wrapper">
          <div class="container-fluid direct-contact-container">
            <h1 className="section-header">Let's talk!</h1>
            <div className="personal-info">
              <ul className="details-list">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">London, UK</div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+75 4925 4932</div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">ltmdwo14@gmail.com</div>
              </div>
              </ul>
              

              <ul class="text-center social-media-list">
                <li>
                  <a
                    href="https://github.com/Laura-TM"
                    target="_blank"
                    class="contact-icon"
                    rel="noreferrer"
                  >
                    <i class="fab fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/laurita-tm/"
                    target="_blank"
                    class="contact-icon"
                    rel="noreferrer"
                  >
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/laura-tm"
                    target="_blank"
                    class="contact-icon"
                    rel="noreferrer"
                  >
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form id="contact-form" class="form-horizontal">
            <div class="form-group">
              <div class="col-sm-12 p-0">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12 p-0">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control col-sm-12"
              rows="10"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button
              class="btn send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
