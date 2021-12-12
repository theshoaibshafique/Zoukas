import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title-container">
        <div className="hero-title">
          <span className="grad-text">Zouks</span>
          <span>, Elevated</span> <br />
          <span>Connectivity for Pros</span>
        </div>
        <div className="hero-title-btns">
          <button className="fb-login-btn">
            <img src="./images/fb.svg" alt="fb-logo" /> Join with Facebook{" "}
          </button>
          <button className="insta-login-btn">
            <img src="./images/insta.svg" alt="insta-logo" /> Join with
            Instagram{" "}
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/hero.svg" alt="hero-image" />
      </div>
      <div className="hero-banner">
        <img src="./images/hero-banner.svg" alt="hero-banner" />
      </div>
    </div>
  );
};

export default Hero;
