import React from "react";
import { NavLink } from "react-router-dom";
import ForgotPasswordImage from "./images/ForgotPasswordImage.png";
import Element02 from "./images/Element02.png";
import Element01 from "./images/Element01.png";
import logo from "./images/logo.png";
import { useGlobalContext } from "./Context";

const ForgotPassword = () => {
  const { setForgotPass, ForgotPass, handleForgotPass } = useGlobalContext();
  return (
    <main>
      <div className="login-phase">
        <img src={Element01} className="element1" alt="logo design1" />
        <div className="logo">
          <img src={logo} className="logo-img" alt="logo" />
          <p className="sign-in">Let’s get your password</p>
        </div>
        <form action="" className="form-input" onSubmit={handleForgotPass}>
          <input
            type="text"
            placeholder="uxlead@gmail.com"
            name="user-name"
            value={ForgotPass}
            className="first-input"
            required
            onChange={(e) => setForgotPass(e.target.value)}
          />
          <button className="login-btn">Submit</button>
        </form>
        <h3 className="goback">
          <NavLink style={{ textDecoration: "none", color: "#322035"}} to="/">
            Go back
          </NavLink>
        </h3>
        <img src={Element02} className="design-2" alt="logo design2" />
      </div>
      <div className="image-phase">
        <img
          src={ForgotPasswordImage}
          className="login-image"
          alt="hero pciture"
        />
        <p className="image-text">
          No need to worry, we can easily get your password, for you.
        </p>
        <div className="circle">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>
    </main>
  );
};
export default ForgotPassword;
