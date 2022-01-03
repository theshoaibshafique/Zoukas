import React from "react";
import Slider from "../carousel/Slider";

import "./AboutApp.css";

const AboutApp = () => {
  const features = [
    {
      image: "./images/aboutapp-1.svg",
      title: "We're here to promote you",
      detail:
        "We'll never compete with Pros by providing our own team of pros or replace our Pros with robots!",
    },
    {
      image: "./images/aboutapp-2.svg",
      title: "We encourage repeat customers for Pros",
      detail:
        "We want to build a business that truly promotes independence and success of individuals and small business.",
    },
    {
      image: "./images/aboutapp-3.svg",
      title: "We're much more than a marketplace",
      detail:
        "We will be your jobs planner and make things simple for all your tasks, including jobs you have from other sources. ",
    },
  ];

  return (
    <div className="about-app" id="features">
      <div className="about-app-banner">
        <img src="./images/about-app-banner.svg" alt="" />
      </div>
      <div className="features">
        {features.map((item, i) => (
          <div key={i} className="feature">
            <div className="feature-image">
              <img src={item.image} alt="" />
            </div>
            <p className="feature-title">{item.title}</p>
            <p className="feature-detail">{item.detail}</p>
          </div>
        ))}
      </div>
      <div className="about-app-title">
        Want a sneak preview into Zouks App?
      </div>
      <div className="about-app-carasoul">
        {/* <img src="./images/aboutapp-4.svg" alt="" /> */}
        <Slider />
      </div>
    </div>
  );
};

export default AboutApp;
