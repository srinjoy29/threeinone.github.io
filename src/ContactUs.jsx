import React from "react";
import Header from "./Header.jsx";


function ContactUs() {
  return (
    <div>
      <Header />
      <div>
        <h2 style={{fontSize: "3rem", opacity: "100%", marginLeft: "1rem" }}>Contact Us</h2>
        <div style={{fontSize: "2.5rem", opacity: "0.5", marginLeft: "3.5rem", fontWeight: "lighter" }}>
        <p>
          If you have any questions, feedback, or need support, please feel free to contact us using the information below:
        </p>
        <ul>
          <li>Email: exploringpresent@gmail.com</li>
          <li>Address: kolkata,India</li>
          <li>Github ID - @srinjoy29</li>

        </ul>
      </div>
      <br />
      <h2 style={{fontSize: "3rem", opacity: "100%", marginLeft: "1rem" }}>About Developer</h2>
      <p style={{fontSize: "2.5rem", opacity: "0.5", marginLeft: "3.5rem", fontWeight: "lighter" }}>
        Hi,
        <br />
        I am Sinjoy Das , developed this web application so that everyone use it to increase their Productivity.
        <br />
        Date of Publish: 23/07/2023
        </p>




      </div>
      
    </div>
  );
}

export default ContactUs;
