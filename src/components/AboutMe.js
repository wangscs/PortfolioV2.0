import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";


function AboutMe() {
  return (
    <ScrollableAnchor id={"about"}>
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          Hi! I'm Steven, an aspiring software engineer currently based in Miami,
          FL. I throughly enjoy designing web applications using the latest 
          technology and building dynamic, responsive, and intuitive web 
          applications. I
        </p>
        <p>
          I am a recent graduate from Florida International University(FIU) with a 
          Bachelors of Science degree in Computer Science specializing in software 
          development and design. Since graduation, I have been honing my own 
          skills by learning different frameworks and practicing by creating my 
          own projects to develop my understanding on both front-end and back-end 
          coding. 
        </p>
      </div>
    </ScrollableAnchor>
  );
}

export default AboutMe;