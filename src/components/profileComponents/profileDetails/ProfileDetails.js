import React from "react";
import "./profileDetail.css";
import { Divider, Paper } from "@mui/material";
import ProfileAvatar from "../avatar/ProfileAvatar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";

const ProfileDetails = () => {
  return (
    <div className="profile-details-container">
      <div className="bgImg">
        <img src="./images/profile-bg.svg" alt="" className="bgImg-desk" />
        <img src="./images/profile-bg-mbl.svg" alt="" className="bgImg-mbl" />
      </div>
      <div className="profile-details">
        <Paper elevation={5} className="paper">
          <div className="profile-details-container">
            <div className="profile-details-upper">
              <div className="upper-right">
                <div className="profile-pic">
                  <div>
                    <span className="bookmark-mbl">
                      <BookmarkBorderIcon />
                    </span>
                    <ProfileAvatar avatarWidth="120px" avatarheight="120px" />
                  </div>
                  <p className="tagCard-mbl">Business</p>
                </div>
                <div className="personal-detail">
                  <p className="name">Smith L.</p>
                  <p className="designation">(Founder / CEO )</p>
                  <p className="tagline">[ Tagline goes here ]</p>
                  <p></p>
                </div>
              </div>
              <div className="divider1">
                <Divider sx={{ background: "#A1ACB3", width: "100%" }} />
              </div>
              <div className="upper-left">
                <p className="tag">
                  <span className="tagCard">Business</span>
                  <span className="bookmark">
                    <BookmarkBorderIcon />
                  </span>
                </p>
                <p className="business-name">Business Name</p>
              </div>
            </div>
            <div className="divider2">
              <Divider sx={{ background: "#A1ACB3" }} />
            </div>
            <div className="profile-details-lower">
              <div className="address-container">
                <p className="address">
                  <LocationOnIcon /> New York, USA
                </p>
                <p className="distance">36min Drive - Home</p>
              </div>
              <div className="messagebtn">
                <button>
                  <MessageIcon /> Message
                </button>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProfileDetails;
