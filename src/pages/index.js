import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Books from "../components/Books";
import Contact from "../components/Contact";

// markup
const IndexPage = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
      <Books />
      <Contact />
    </main>
  );
};

export default IndexPage;
