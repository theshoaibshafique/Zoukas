import React from "react";
import "./profileDetail.css";
import { Paper } from "@mui/material";
const ProfileDetails = () => {
  return (
    <div className="profile-details-container">
      <div className="bgImg">
        <img src="./images/profile-bg.svg" alt="" />
      </div>
      <div className="profile-details">
        <Paper
          elevation={5}
          style={{
            maxHeight: "376px",
            padding: "20px",
            minHeight: "376px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          ducimus ea culpa, magni rerum delectus impedit rem suscipit atque quia
          beatae, repellendus dolorum inventore reiciendis est corporis
          repudiandae! Doloribus, cumque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quisquam ducimus ea culpa, magni rerum
          delectus impedit rem suscipit atque quia beatae, repellendus dolorum
          inventore reiciendis est corporis repudiandae! Doloribus, cumque.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          ducimus ea culpa, magni rerum delectus impedit rem suscipit atque quia
          beatae, repellendus dolorum inventore reiciendis est corporis
          repudiandae! Doloribus, cumque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quisquam ducimus ea culpa, magni rerum
          delectus impedit rem suscipit atque quia beatae, repellendus dolorum
          inventore reiciendis est corporis repudiandae! Doloribus, cumque.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          ducimus ea culpa, magni rerum delectus impedit rem suscipit atque quia
          beatae, repellendus dolorum inventore reiciendis est corporis
          repudiandae! Doloribus, cumque. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quisquam ducimus ea culpa, magni rerum
          delectus impedit rem suscipit atque quia beatae, repellendus dolorum
          inventore reiciendis est corporis repudiandae! Doloribus, cumque.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          ducimus ea culpa, magni rerum delectus impedit rem suscipit atque quia
          beatae, repellendus dolorum inventore reiciendis est corporis
          repudiandae! Doloribus, cumque.
        </Paper>
      </div>
    </div>
  );
};

export default ProfileDetails;
