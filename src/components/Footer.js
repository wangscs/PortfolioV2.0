import React from "react";

function Footer() {
  const currentYear = new Date();
  return (
    <footer>
      <p>Made by Steven Wang © {currentYear.getFullYear()}</p>
    </footer>
  );
}

export default Footer;