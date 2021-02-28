import React, { useState, useEffect } from "react";
import { debounce} from '../utilities/helpers';

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
          <li><a href="#/">Home</a></li>
        </div>
        <div className="nav-right">
          <li><a href="#about" className="nav-section">About</a></li>
          <li><a href="#skills" className="nav-section">Skills</a></li>
          <li><a href="#projects" className="nav-section">Projects</a></li>
          <li><a href="#contact" className="nav-section">Contact</a></li>
          <li><a href="#resume" className="resume" style={{padding: ".3em"}}>Resume</a></li>
        </div>
        </ul>
    </div>
  );
}

export default NavBar;