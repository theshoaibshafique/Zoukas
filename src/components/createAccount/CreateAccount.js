import React from "react";
import "./CreateAccount.css";
const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <div className="create-account">
        <img src="./images/accountbg.svg" className="bg-img" alt="" />
        <img src="./images/logo.svg" alt="logo" className="account-logo" />
        <p className="corner-text">
          3 For Free <br /> Connections
        </p>
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
      </div>
    </div>
  );
};

export default CreateAccount;
