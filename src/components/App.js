import React from 'react';
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import '../App.css';
import ProjectList from '../ProjectList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Skills />
        <div className="project-container">
          <h1>Projects I've Built</h1>
          {ProjectList.map(projectItem => {
            return (
              <Projects
                key         = {projectItem.id}
                title       = {projectItem.title}
                img         = {projectItem.imageURL}
                description = {projectItem.description}
                gitLink     = {projectItem.repoLink}
                liveLink    = {projectItem.liveProject}
              />
            );
          })}
        </div>
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
