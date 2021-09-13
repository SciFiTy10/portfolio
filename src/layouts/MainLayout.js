import React from "react";
import Welcome from "../components/Section/Welcome";
import About from "../components/Section/About";
import Projects from "../components/Section/Projects";
import Books from "../components/Section/Books";
import Contact from "../components/Section/Contact";
import Footer from "../components/Section/Footer";
import {
  aboutData,
  projectsData,
  bookData,
  contactData,
  linkedIn,
  github,
} from "../Data/data";
import PortfolioContext from "../context/context";
const MainLayout = () => {
  return (
    //provide context data for child components
    <PortfolioContext.Provider
      value={{
        aboutData,
        projectsData,
        bookData,
        contactData,
        linkedIn,
        github,
      }}
    >
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
