import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-social">
          <img src="./images/logo.svg" alt="" />
          <p>Elevated Connectivity For Pros.</p>
          <div className="social-icons">
            <a href="#home">
              <span>
                <FacebookRoundedIcon
                  style={{
                    color: "#555555",
                  }}
                />
              </span>
            </a>
            <a href="#home">
              <span>
                <InstagramIcon
                  style={{
                    color: "#555555",
                  }}
                />
              </span>
            </a>
          </div>
        </div>
        <div className="footer-app">
          <p className="footer-text">LAUNCHING SOON</p>
          <img src="./images/app-store.svg" alt="" />
          <img src="./images/play-store.svg" alt="" />
        </div>
        <div className="footer-newsletter">
          <p className="footer-text">
            SUBSCRIBE To Be The First To Know When We Launch
          </p>
          <span className="footer-input">
            <input type="text" placeholder="Your Email" />
            <span>
              <ArrowForwardIosIcon
                style={{
                  color: "#ffffff",
                }}
              />
            </span>
          </span>
          <p className="footer-text-2">
            We'll never give your email to third parties that will bug you with
            useless emails.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© copyrights zouks</p>
        <span>
          Developed by{" "}
          <a
            href="https://theshoaib.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Shoaib
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
