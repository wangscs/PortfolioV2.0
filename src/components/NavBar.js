import React from "react";
import ReactDOM from 'react-dom'; 

function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;