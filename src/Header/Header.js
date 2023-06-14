import React, { useState } from "react";
import { Link } from "react-router-dom";
import NetFlixLogo from "../Images/netflix.png";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../StoreRedux/Auth";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { setSearchQuery } from "../StoreRedux/Search";

const Header = () => {
  const [searchQuery, setSearchQueryy] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.isEmailVerified);
  // console.log(userEmail);

  const searchMovieHere = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQueryy(query);
    dispatch(setSearchQuery(query));
  };

  const LogOutHandler = () => {
    dispatch(authActions.setLogOut());
    navigate("/");
  };
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
      <div className="search">
        <div>
          <Form.Control
            type="search"
            placeholder="Search Here..."
            onChange={searchMovieHere}
            value={searchQuery}
            style={{ width: "37%" }}
          />
        </div>
      </div>
      <div className="userEmailWhenLogIn">
        <div className="useremail" style={{ color: "red", fontWeight: "bold" }}>
          {userEmail}
        </div>
        <div className="logOut">
          <button onClick={LogOutHandler} style={{ cursor: "pointer" }}>
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
