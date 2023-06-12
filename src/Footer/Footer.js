import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="Footer"
      style={{
        marginTop: "3rem",
        borderTop: "7px solid darkgrey",
        padding: "39px",
      }}
    >
      <div style={{ margin: "3rem 28rem", fontWeight: "bold" }}>
        Questions? Call 000-800-919-1694
      </div>
      <div className="SubFooter">
        <Link to="/FAQ">
          <div style={{ textDecoration: "underLine" }}>FAQ</div>
        </Link>
        <div>Contact Us</div>
        <Link to="/SignIn">
          <div style={{ textDecoration: "underLine" }}>Sign In</div>
        </Link>
        <div>Netflix India</div>
      </div>
    </div>
  );
};

export default Footer;
