import React from "react";
import "./Frontpage.css";
import NETFLIXLOGO from "../Images/netflix.png";
import BackGroundImg from "../Images/dcl-650-Bx5-8M-y0sI-unsplash.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useRef } from "react";

const Frontpage = () => {
  const userEmail = useRef();
  const navigate = useNavigate();

  const VerifyEmail = () => {
    const enteredUserEmail = userEmail.current.value;
    if (enteredUserEmail === "") {
      toast("Please enter the Email");
    } else if (!enteredUserEmail.includes("@")) {
      toast("Email should contain @");
    } else {
      toast("Email does not Exist , Create New Account");
    }
    userEmail.current.value = "";
  };

  const signInPage = () => {
    navigate("/SignIn");
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${BackGroundImg})`,
  };

  return (
    <>
      <div className="Main_Div" style={backgroundImageStyle}>
        <div className="horizontalLine">
          <div className="forImg">
            <img src={NETFLIXLOGO} alt="NETFLIXlogo" />
          </div>
          <div className="rightSide">
            <div className="languages">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <div className="SignIn">
              <button onClick={signInPage}>SignIn</button>
            </div>
          </div>
        </div>
        <div className="screenContent">
          <div className="ScreentTEXT">
            <span className="mainText">
              Unlimited movies, TV shows and more
            </span>
            <span>Watch anywhere. Cancel anytime.</span>
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
          </div>
          <div className="inputField">
            <input type="email" placeholder="Email" ref={userEmail} required />
            <button onClick={VerifyEmail}>Verify Email</button>
          </div>
        </div>

        <ToastContainer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Frontpage;
