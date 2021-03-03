import React from "react";
import ProjectFolder  from "./images/ProjectFolder.svg";
import GitHubLink  from "./images/github.svg";
import LiveLink  from "./images/share.svg";

function arrToStr(arr){
  var processedArr = ""
  arr.forEach(techItem => {
    processedArr += techItem + " "
  });
  return processedArr;
};

function Projects(props) {
  const techArr = props.tech;

  if(props.liveLink === ""){
    return (
      <div className="project">
        <img src={ProjectFolder} className="project-folder-icon" alt="Icons made by Pixel Perfect from www.flaticon.com"/>
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
          <img src={GitHubLink} className="project-link" alt="Icons made by Pixel Perfect from www.flaticon.com"></img>
        </a>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="project-tech">
          {arrToStr(techArr)}
        </p>
      </div>
    );
  } else if (props.liveLink === "private"){
    return (
      <div className="project">
        <img src={ProjectFolder} className="project-folder-icon" alt="Icons made by Pixel Perfect from www.flaticon.com"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="project-tech">
          {arrToStr(techArr)}
        </p>
      </div>
    );
  } else {
    return (
      <div className="project">
        <img src={ProjectFolder} className="project-folder-icon" alt="Icons made by Pixel Perfect from www.flaticon.com"/>
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
          <img src={GitHubLink} className="project-link" alt="Icons made by Pixel Perfect from www.flaticon.com"></img>
        </a>
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          <img src={LiveLink} className="project-link" alt="Icons made by Kiranshastry from www.flaticon.com"></img>
        </a>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p className="project-tech">
          {arrToStr(techArr)}
        </p>
      </div>
    );
  }
}

export default Projects;
