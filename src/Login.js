import React from 'react'
import {NavLink} from 'react-router-dom';
import loginImage from './images/loginImage.png';
import Element02 from "./images/Element02.png";
import Element01 from "./images/Element01.png";
import logo from "./images/logo.png";
import {useGlobalContext} from './Context'



const Login =()=>{

    const {setUserName,userName, userPassword, setUserPassword, handleLogin} = useGlobalContext()
    return (
      <main>
        <div className="login-phase">
          <img src={Element01} className="element1" alt="logo design1" />
          <div className="logo">
            <img src={logo} className="logo-img" alt="logo" />
            <p className="sign-in">Sign in to your account to continue</p>
          </div>
          <form action="" className="form-input" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="uxlead@gmail.com"
              name="user-name"
              value={userName}
              className="first-input"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={userPassword}
              className="first-input"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p className="forgot-pass">
              <NavLink to="/forgotpassword" style={{ textDecoration: "none", color:"#322035" }}>
                Forgot your password?
              </NavLink>
            </p>

            <NavLink
              className="log-link"
              to="/overview"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <button className="login-btn">Sign In</button>
            </NavLink>
          </form>
          <img src={Element02} className="design-2" alt="logo design2" />
        </div>
        <div className="image-phase">
          <img src={loginImage} className="login-image" alt="hero pciture" />
          <p className="image-text">
            Do you know you can easily choose your mode of learning on this
            platform? Hover aboard to know more.
          </p>
          <div className="circle">
            <div className="circle1"></div>
            <div className="circle2"></div>
          </div>
        </div>
      </main>
    );
}
export default Login;