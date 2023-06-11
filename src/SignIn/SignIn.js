import { useState, useRef } from "react";
import classes from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../Images/dcl-650-Bx5-8M-y0sI-unsplash.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // Form submit Handler  : =
  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    try {
      // If user ALREADY HAVE ACCOUNT THEN LOG-IN .

      if (isLogin) {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1ATbw64HXdJOxVyWgBfiIQCpodpDgxlw",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          // Sign-in successful
          toast.success("Login Successfully");
          const data = await response.json();
          console.log(data.email);
          localStorage.setItem("email", data.email);
          localStorage.setItem("token", data.idToken);
          // whenever the POST req is succ means user login then , redirect him to Home page .
          navigate("/Home");
        } else {
          const errorData = await response.json();
          console.log(errorData.message);
          toast.error("Login failed: " + errorData.error.message);
        }
      } else {
        // If user DONT HAVE ACCOUNT THEN SIGN -UP .

        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1ATbw64HXdJOxVyWgBfiIQCpodpDgxlw",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Handle successful sign-up
          const data = await response.json();
          console.log(data);
          toast.success("Account Created Successfully.");
          emailInputRef.current.value = "";
          passwordInputRef.current.value = "";
        } else {
          // Sign-up failed
          const errorData = await response.json();
          let errorMessage = "Authentication Failed";

          // To show full error if there is error ...
          if (errorData && errorData.error && errorData.error.message) {
            errorMessage = errorData.error.message;
          }
          alert(errorMessage);
        }
      }
    } catch (error) {
      // Catch and handle any errors
      console.log(error);
      toast.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div className={classes.img} style={backgroundImageStyle}>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              ref={emailInputRef}
              placeholder="Enter Email Here"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              min="5"
              max="20"
              required
              placeholder="Enter Your Password"
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};
export default SignIn;
