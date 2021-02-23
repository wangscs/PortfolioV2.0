import React from 'react';
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
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
        <Footer />
      </header>
    </div>
  );
}

export default App;
