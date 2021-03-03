import React, { useState, useEffect } from "react";
import { debounce} from "../utilities/helpers";
import logo from "./images/logo.png"

function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(()=> {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 60) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 50); // debounce sets limit to function call rate
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="nav-bar-container" style={{top: visible ? '0' : '-100px'}}>
      <ul className="navBar">
        <div className="nav-left">
          <a href="#/">
            <img src={logo} className="logo" alt="Person portfolio logo icon"/>
          </a>
        </div>
        <div className="nav-right">
          <li><a href="#about" className="nav-section">About</a></li>
          <li><a href="#skills" className="nav-section">Skills</a></li>
          <li><a href="#projects" className="nav-section">Projects</a></li>
          <li><a href="#contact" className="nav-section">Contact</a></li>
          <li>
            <a href="https://drive.google.com/file/d/1y4VkesOCOZ50W0nyZzrFpf1benf0BWgk/view?usp=sharing" 
            className="resume" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{padding: ".3em"}}>
              Resume
            </a>
          </li>
        </div>
        </ul>
    </div>
  );
}

export default NavBar;