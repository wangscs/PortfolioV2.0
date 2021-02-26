import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function LandingPage() {
  return (
    <ScrollableAnchor id={"/"}>
      <div className="landing-page-container">
        <div className="landing-page">
          <h3>Hi my name is </h3>
          <h1>Steven Wang</h1>
          <p>
            I am a software engineer specialized in building and creating 
            exceptional web applications.
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default LandingPage;