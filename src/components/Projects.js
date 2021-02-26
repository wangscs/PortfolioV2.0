import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function Projects(props) {
  return (
    <ScrollableAnchor id={"projects"}>
      <div className="project">
        <img src={props.img} alt="project"/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {/* <button><img src={props.gitIMG}><a>{props.gitLink}</a></img></button> */}
        {/* <button><img src={props.liveIMG}><a>{props.liveLink}</a></img></button> */}
      </div>
    </ScrollableAnchor>
  );
}

export default Projects;