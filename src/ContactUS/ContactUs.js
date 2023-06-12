import React, { useState } from "react";
import "./ContactUs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Images/netflix.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      toast("Fill the Input field first");
    } else {
      toast.success("Successfully send the data");
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="contactPage"
      style={{ backgroundColor: "white", width: "100%", padding: "2rem" }}
    >
      <nav className="Navbar">
        <div>
          <img src={Logo} width="20%" alt="img" />
        </div>
        <div>| Help Center</div>
        <div className="right">Email</div>
      </nav>
      <div className="contact-us" style={{ color: "black" }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Describe your issue here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
