import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  return(
    <ScrollableAnchor id={"contact"}>
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <div className="contact-container">
          <div className="contact">
            <h1>Let's Connect!</h1>
            <p>
              Whether you have a question or simply want to say hi, feel free 
              to contact me or connect with me via any of the links provided.
            </p>
            <button><a href="mailto:steven14812@gmail.com">Contact Me</a></button>
          </div>
        </div>
      </ScrollAnimation>
    </ScrollableAnchor>
  );
}

  
export default Contact;