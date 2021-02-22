import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear;
  return (
    <footer>
      <p>Made by Steven Wang © {currentYear}</p>
    </footer>
  );
}

export default Footer;