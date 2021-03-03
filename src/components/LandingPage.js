import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

function LandingPage() {
  return (
    <ScrollableAnchor id={"/"}>
      <div className="landing-page-container">
        <div className="landing-page">
          <h3>Hi my name is </h3>
          <h1>Steven Wang</h1>
          <h2>Software Engineer</h2>
          <p>
            I am passionate about designing and coding excellent
            software that improves the lives of those around me.
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default LandingPage;