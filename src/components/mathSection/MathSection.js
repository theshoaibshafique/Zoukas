import React from "react";
import "./MathSection.css";

const MathSection = () => {
  return (
    <div className="math-section">
      <div className="math-banner">
        <img src="./images/math-banner.svg" alt="" />
      </div>
      <p className="math-text">
        Your savings with Zouks would be huge, let's assume a Pro charges $35/hr
        and works for 4 hours
      </p>
      <p className="do-math">Let's do the math!</p>
      <div className="math-image">
        <img src="./images/math-1.svg" alt="" />
      </div>
      <p className="math-text">
        With Zouks you keep an extra $16, that can pay for a good lunch!
      </p>
      <p className="math-text-2">
        Let's do more math to see how this adds up over time.
      </p>
      <div className="math-image">
        <img src="./images/math-2.svg" alt="" />
      </div>
      <p className="math-text">That can pay for a car note & a few bills!</p>
      <p className="math-text-2">
        We do not charge your clients 15% - that discourages repeat clients.{" "}
      </p>
    </div>
  );
};

export default MathSection;
