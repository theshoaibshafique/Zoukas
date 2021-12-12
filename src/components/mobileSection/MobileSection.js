import React from "react";
import "./MobileSection.css";

const MobileSection = () => {
  return (
    <>
      <div className="mobile-section">
        <div className="mobile-sec-img">
          <img src="./images/mobile-1.svg" />
        </div>
        <div className="mobile-sec-text">
          <span className="grad-text">Everyone</span> <span>is a Pro at</span>{" "}
          <br /> <span>something</span> <br /> <br />
          <p>
            Cleaning, moving, landscaping, teaching, or fixing things - the
            opportunities are endless!
          </p>
        </div>
      </div>
      <div className="mobile-section">
        <div className="mobile-sec-text">
          <span className="grad-text">Tell</span> <span>us what you</span>{" "}
          <br /> <span>need done</span> <br /> <br />
          <p>Zouks matches Pros with Clients</p>
        </div>
        <div className="mobile-sec-img-2">
          <img src="./images/mobile-2.svg" />
        </div>
      </div>
    </>
  );
};

export default MobileSection;
