import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import FrontEndIcon  from "./images/FrontEndIcon.svg";
import BackEndIcon  from "./images/BackEndIcon.svg";
import ConceptIcon  from "./images/ConceptIcon.svg";

function Skills() {
  return (
    <ScrollableAnchor id={"skills"}>
      <div className="skills-container">
        <h1>Skills</h1>
        <p>Here are some of the languages, concepts and technologies I have worked with: </p>

        <div className="parent">
          <div className="leftChildDiv">
            <img src={FrontEndIcon} className="skill-icon" alt="s"></img>
            <h3>FrontEnd</h3>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript</p>
              <p>JQuery</p>
              <p>React.js</p>
            <img src={BackEndIcon} className="skill-icon" alt="s"></img>
            <h3>BackEnd</h3>
              <p>Express</p>
              <p>Node.js</p>
              <p>Java</p>
              {/* <p>Python</p> // Not really confident yet*/}
              <p>Firebase</p>
              <p>PHP</p>
              <p>Laravel</p>
          </div>
          <div className="rightChildDiv">
            <img src={ConceptIcon} className="skill-icon" alt="s"></img>
            <h3>Database/Concepts</h3>
              <p>MongoDB</p>
              <p>Docker</p>
              <p>MySQL</p>
              <p>CI/CD</p>
              <p>Scrum</p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default Skills;