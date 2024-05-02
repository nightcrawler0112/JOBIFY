import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";


const Landing = () => {
  return <Wrapper>
    <nav>
      <img src={logo} alt="jobify" className="logo" />
    </nav>

    <div className="container page">
      <div className="info">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        Welcome to our Job Tracking App! This platform is designed to help you manage and track your job applications all in one place. It's the perfect tool for job seekers looking to stay organized and efficient in their job search. Start your journey with us today!
        </p>
        <Link to="/register" className="btn register-link">
          Register
        </Link>
        <Link to="/login" className="btn">
          Login/Demo User
        </Link>
          
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </div>
    </Wrapper>
};




export default Landing;
