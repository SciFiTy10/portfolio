import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Books from "../components/Books";

// markup
const IndexPage = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Projects />
      <Books />
    </main>
  );
};

export default IndexPage;
