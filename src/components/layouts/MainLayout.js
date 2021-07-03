import React from "react";
import Welcome from "../Welcome";
import About from "../About";
import Projects from "../Projects";
import Books from "../Books";
import Contact from "../Contact";
import Footer from "../Footer";

import { aboutData } from "../../Data/data";
import PortfolioContext from "../../context/context";
const MainLayout = () => {
  return (
    <PortfolioContext.Provider value={{ aboutData }}>
      <Welcome />
      <About />
      <Projects />
      <Books />
      <Contact />
      <Footer />
    </PortfolioContext.Provider>
  );
};

export default MainLayout;
