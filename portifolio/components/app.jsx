import React from "react";
import Bio from "./components/Bio";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <main id="container">
      <Bio />
      <section id="about-container">
        <About />
        <Projects />
      </section>
    </main>
  );
}

export default App;
