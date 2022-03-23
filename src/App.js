import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";

/* ask daniel why line 3 cannot be imported directly from the folder itself and delete the extra index.js inside the components folder */
import { Home, About, Skills, Projects, Contact } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/skills" element={<Skills />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
