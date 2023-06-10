import React from "react";
import { Link } from "react-router-dom";
import NetFlixLogo from "../Images/netflix.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_logo"
            src={NetFlixLogo}
            style={{ width: "20%" }}
            alt="netflix-logo"
          />
        </Link>
        <div className="header-link">
          <Link to="/movies/popular">
            <span>Popular</span>
          </Link>
          <Link to="/movies/TopRated">
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/Upcoming">
            <span>Upcoming</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
