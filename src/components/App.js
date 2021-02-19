import React from 'react';
// import logo from './logo.svg';
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
