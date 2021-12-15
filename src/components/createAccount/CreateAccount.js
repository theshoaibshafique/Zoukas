import React from "react";
import "./CreateAccount.css";
const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <div className="create-account">
        <img src="./images/accountbg.svg" className="bg-img" alt="" />
        <div className="account-logo-container">
          <p className="corner-text">
            3 For Free <br /> Connections
          </p>
          <div className="account-logo">
            <img src="./images/logo.svg" alt="logo" />
          </div>
        </div>

        <div className="account-details">
          <div className="acount-input-details">
            <form action="">
              <p className="details-title">Join / Create an account </p>
              <p className="input-detail">
                Pre-register to join now and get your first 3 Zouks <br />{" "}
                connection fees waived
              </p>
              <label htmlFor="acc-name">Name</label>
              <input type="text" required />
              <label htmlFor="acc-email">Email Address</label>
              <input type="text" required />
              <button className="acc-submit-btn" type="submit">
                Join
              </button>
              <div className="acc-btn">
                <button className="fb-login-btn">
                  <img src="./images/fb.svg" alt="fb-logo" /> Join with Facebook{" "}
                </button>
                <button className="insta-login-btn">
                  <img src="./images/insta.svg" alt="insta-logo" /> Join with
                  Instagram{" "}
                </button>
              </div>
            </form>
          </div>
          <div className="account-info">
            <p className="account-info-text-1">
              3 For Free <br /> Connections <br /> for Clients & Pros{" "}
            </p>
            <p className="account-info-text-2">
              Like what we are <br /> aiming to accomplish?{" "}
            </p>
            <p className="account-info-text-3">Let your friends know </p>
            <p className="account-info-text-4">SHARE ON</p>
            <div className="social-icons">
              <a href="#home">
                <img src="./images/fb.svg" alt="" />
              </a>
              <a href="#home">
                <img src="./images/insta.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
