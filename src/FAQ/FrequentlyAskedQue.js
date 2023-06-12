import React from "react";
import { Link } from "react-router-dom";
import "./FrequentlyAskedQue.css";
import FAQIMG from "../Images/souvik-banerjee-I4MTFEPvpdk-unsplash.jpg";
import FAQTWO from "../Images/charlesdeluvio-MDUI8XIq6Mc-unsplash.jpg";
import FAQTHREE from "../Images/tomas-evaristo-G03vSUk9wR0-unsplash.jpg";
import FAQFOUR from "../Images/freestocks-11SgH7U6TmI-unsplash.jpg";
import { useSelector } from "react-redux";
import Logo from "../Images/netflix.png";

const FrequentlyAskedQue = () => {
  const userEmail = useSelector((state) => state.auth.isEmailVerified);
  console.log(userEmail);
  return (
    <div className="Div" style={{ background: " white" }}>
      <nav className="Navbar">
        <div>
          <img src={Logo} width="20%" />
        </div>
        <div>| Help Center</div>
        <div>{userEmail}</div>
      </nav>
      <div
        className="Info_FirstDiv "
        style={{
          margin: "2rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "2rem",
          color: "black",
        }}
      >
        <Link to="/">
          <div>Back To Home</div>
        </Link>
        <div style={{ fontWeight: "bold", color: "black" }}>
          What is Netflix?
        </div>
        <img
          src={FAQIMG}
          alt="FAQimg"
          style={{ width: "60%", borderRadius: "20px" }}
        />
        <div>
          Netflix is a subscription-based streaming service that allows our
          members to watch TV shows and movies on an internet-connected device.{" "}
        </div>
        <div>
          Depending on your plan, you can also download TV shows and movies to
          your iOS, Android, or Windows 10 device and watch without an internet
          connection.
        </div>
        <div>
          If you're already a member and would like to learn more about using
          Netflix, visit Getting started with Netflix.
          <hr />
        </div>
      </div>
      <div
        className="Info_Second_Div"
        style={{
          margin: "2rem 2rem",
          margin: "2rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "2rem",
          color: "black",
        }}
      >
        <div style={{ fontWeight: "bold", color: "black" }}>
          TV Shows & Movies
        </div>
        <div>
          <img src={FAQTWO} style={{ width: "60%", borderRadius: "20px" }} />
        </div>
        <div>
          Netflix content varies by region and may change over time. You can
          watch a variety of award-winning Netflix originals, TV shows, movies,
          documentaries, and more.{" "}
        </div>
        <div>
          The more you watch, the better Netflix gets at recommending TV shows
          and movies.
        </div>
        <hr />
      </div>
      <div
        className="Info_Third_Div"
        style={{
          margin: "2rem 2rem",
          margin: "2rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "2rem",
          color: "black",
        }}
      >
        <div style={{ fontWeight: "bold", color: "black" }}>
          Supported Devices
        </div>
        <div>
          <img src={FAQTHREE} style={{ width: "60%", borderRadius: "20px" }} />
        </div>
        <div>
          You can watch Netflix through any internet-connected device that
          offers the Netflix app, including smart TVs, game consoles, streaming
          media players, set-top boxes, smartphones, and tablets. You can also
          watch Netflix on your computer using an internet browser. You can
          review the system requirements for web browser compatibility, and
          check our internet speed recommendations to achieve the best
          performance.
        </div>
        <div>
          NOTE: The Netflix app may come pre-loaded on certain devices, or you
          may need to download the Netflix app onto your device. Netflix app
          functionality may differ between devices.
        </div>
        <hr />
      </div>
      <div
        className="Info_Third_Div"
        style={{
          margin: "2rem 2rem",
          margin: "2rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "2rem",
          color: "black",
        }}
      >
        <div style={{ fontWeight: "bold", color: "black" }}>Get Stared</div>
        <div>
          <img src={FAQFOUR} style={{ width: "60%", borderRadius: "20px" }} />
        </div>
        <div>To start watching Netflix:</div>
        <div>
          <ol
            style={{
              margin: "0px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <Link to="/SignIn">
              <li>Visit netflix.com/signup.</li>
            </Link>
            <li>Choose a plan.</li>
            <li>
              Create an account by entering your email address and creating a
              password.
            </li>
            <li>Enter a payment method.</li>
          </ol>
        </div>
        <div>
          As a Netflix member, you are charged once a month on the date you
          signed up.{" "}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FrequentlyAskedQue;
