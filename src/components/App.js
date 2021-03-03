import React from 'react';
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "../App.css";
import ProjectList from "../ProjectList";
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Skills />
        <ScrollableAnchor id={"projects"}>
          <div className="project-container">
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
            <h1>Projects</h1>
            {ProjectList.map(projectItem => {
              return (
                <Projects
                  key         = {projectItem.id}
                  title       = {projectItem.title}
                  img         = {projectItem.imageURL}
                  description = {projectItem.description}
                  gitLink     = {projectItem.repoLink}
                  liveLink    = {projectItem.liveProject}
                  tech        = {projectItem.technologies}
                />
              );
            })}</ScrollAnimation>
          </div>
        </ScrollableAnchor>
        <div className="ending"> 
          <Contact />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
