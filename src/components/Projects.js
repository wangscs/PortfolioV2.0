import React from "react";


function Projects(props) {



  return (
    <div className="project">
      <img src={props.img} alt="project"/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {/* <button><img src={props.gitIMG}><a>{props.gitLink}</a></img></button> */}
      {/* <button><img src={props.liveIMG}><a>{props.liveLink}</a></img></button> */}
    </div>
  );
}

export default Projects;