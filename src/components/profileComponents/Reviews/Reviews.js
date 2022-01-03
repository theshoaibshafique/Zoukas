import React from "react";
import "./Reviews.css";
import { Paper, Avatar, Divider } from "@mui/material";
import ProfileAvatar from "../avatar/ProfileAvatar";
const Reviews = () => {
  return (
    <div>
      <Paper
        elevation={5}
        style={{
          padding: "20px",
        }}
      >
        <div className="services-title-container">
          <p className="services-title">Reviews</p>
        </div>
        <div className="review-profile-container">
          <Avatar src="./images/profile-1.svg" sx={{ width: 56, height: 56 }} />
          <div className="review-profile">
            <p>Robert Fox</p>
            <span>United Kingdom</span>
          </div>
        </div>
        <div className="review-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptatibus consectetur, alias aliquid voluptatum quo similique sed
          et unde illum minima! Aperiam eum officiis quis sit nostrum. Velit,
          saepe cupiditate!
        </div>
        <div className="review-time">3 months ago</div>
        <Divider />
      </Paper>
    </div>
  );
};

export default Reviews;
