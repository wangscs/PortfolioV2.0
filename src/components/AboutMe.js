import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    <ScrollableAnchor id={"about"}>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="about-me-container">
          <div className="about-me">
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
        </div>
      </ScrollAnimation>
    </ScrollableAnchor>
  );
}

export default AboutMe;