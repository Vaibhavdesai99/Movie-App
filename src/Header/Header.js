import React from "react";
import { Link } from "react-router-dom";
import NetFlixLogo from "../Images/netflix.png";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const userEmail = useSelector((state) => state.auth.isEmailVerified);
  // console.log(userEmail);
  return (
    <div className="header" style={{ marginBottom: "-3rem" }}>
      <div className="headerLeft">
        <Link to="/Home">
          <img
            className="header_logo"
            src={NetFlixLogo}
            style={{ width: "20%" }}
            alt="netflix-logo"
          />
        </Link>
        <div className="header-link">
          <Link to="/movies/popular">
            <span style={{ fontWeight: "bold" }}>Popular</span>
          </Link>
          <Link to="/movies/top_rated">
            <span style={{ fontWeight: "bold" }}>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming">
            <span style={{ fontWeight: "bold" }}>Upcoming</span>
          </Link>
        </div>
      </div>
      <div className="userEmailWhenLogIn">
        <div className="useremail" style={{ color: "red", fontWeight: "bold" }}>
          {userEmail}
        </div>
        <div className="logOut">
          <button onClick={LogOutHandler}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
