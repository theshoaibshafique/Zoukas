import React from "react";
import "./ContactUs.css";
const ContactUS = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-title">Contact Us</div>
      <div className="contact-us-subtitle">
        Have any questions? Let us know what they are and we will respond within
        24 hours.
      </div>
      <div className="form-container">
        <form action="" className="contact-us-form">
          <div className="form-details">
            <div className="form-left">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
              <label htmlFor="number">Phone Number</label>
              <input type="text" id="number" />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-right">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" />
            </div>
          </div>
          <div className="form-submit">
            <button className="acc-submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
