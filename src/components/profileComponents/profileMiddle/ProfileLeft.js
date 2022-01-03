import React from "react";
import { Divider } from "@mui/material";
import "./profileMiddle.css";
import "./profileLeft.css";
const ProfileLeft = () => {
  return (
    <div className="profile-middle-left">
      <div className="jobs">
        <p className="total-jobs-title">12</p>
        <p className="total-jobs-text">Total Jobs</p>
        <Divider color="#DCDEE7" />
      </div>
      <div className="languages">
        <p className="left-title">Languages</p>
        <div className="left-text">
          <p>English - Fluent</p>
          <p>French - Fluent</p>
        </div>
        <Divider color="#DCDEE7" />
      </div>
      <div className="tools">
        <p className="left-title">Tools & Equipment</p>
        <div className="left-text">
          <p>Power Tools</p>
          <p>Moving Truck</p>
        </div>
        <Divider color="#DCDEE7" />
      </div>
      <div className="hours">
        <p className="left-title">Working Hours</p>
        <div className="left-text">
          <p className="working-hours">
            <span>Monday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Tuesday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Wednesday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Thursday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Friday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Saturday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
          <p className="working-hours">
            <span>Sunday</span> <span>7:30 AM - 9:30 PM</span>
          </p>
        </div>
      </div>
      <div className="leftImg">
        <img src="./images/Saly-10.svg" alt="" />
      </div>
    </div>
  );
};

export default ProfileLeft;
