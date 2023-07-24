import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} @srinjoy29-github</p>
    </footer>
  );
  }

export default Footer;
