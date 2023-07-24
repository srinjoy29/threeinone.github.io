
// export default Header;
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./header.css"; // Import the CSS file
import ContactUs from "./ContactUs";
import Home from "./Home";
import UserManual from "./UserManual";

function Header() {
  return (
    <>
      <header>
        <h1 className="logo">3-IN-ONE</h1>
        <nav className="nav-links">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UserManual">User Manual</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserManual" element={<UserManual />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default Header;
