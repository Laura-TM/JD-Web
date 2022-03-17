import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar, Intro, Skills, Projects, Contact, Brands } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Router>
          <Navbar />
        </Router>
      </div>
      {/* <div className="main-section">
        <Intro />
        <Skills />
        <Projects />
      </div>
      <div className="footer-section">
        <Contact />
        <Brands />
      </div> */}
    </div>
  );
}

export default App;
