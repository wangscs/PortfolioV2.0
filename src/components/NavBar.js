import React from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {
  return (

    <div>
      <ul className="navBar">
        <li><a href="/" className="logo">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </div>
  );
}

export default NavBar;