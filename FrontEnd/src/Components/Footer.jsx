import React from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src="./../Logo.png" />
        </div>
        <div>
          <span className="footer-title">Pages</span>
          <NavLink to="/" className="link link-hover">
            Home
          </NavLink>
          <NavLink to="/contact" className="link link-hover">
            Contact Us
          </NavLink>
          <NavLink to="/about" className="link link-hover">
            About Us
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
