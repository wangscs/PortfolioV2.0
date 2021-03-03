import React from "react";
import githubPic from "./images/GitHub.png"
import linkedInPic from "./images/LinkedIn.png"

function Footer() {
  const currentYear = new Date();
  return (
    <footer>
      <h1>Steven Wang</h1>
      <h4>Software Engineer</h4>
      <hr></hr>
      <a className="footer-link" href="https://www.github.com/wangscs">
        <img className="link-img" src={githubPic} alt="GitHub Logo Profile For Steven Wang"/>
      </a>
      <a className="footer-link" href="https://www.linkedin.com/in/wangscs">
          <img className="link-img" src={linkedInPic} alt="LinkedIn Logo Profile For Steven Wang"/>
      </a>
      <p>Made by Steven Wang © {currentYear.getFullYear()}</p>
    </footer>
  );
}

export default Footer;