import { Divider, Grid, Paper } from "@mui/material";
import React from "react";
import Portfolio from "../portfolio/Portfolio";
import Services from "../services/Services";
import "./profileMiddle.css";
const ProfileMiddle = () => {
  return (
    <div className="profile-middle">
      <Grid container spacing={2}>
        <Grid item md={4}>
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
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className="profile-middle-right">
                <div className="description-container">
                  <Paper
                    elevation={5}
                    style={{
                      padding: "20px",
                    }}
                  >
                    <p className="description-title"> Description</p>
                    <p className="description">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil obcaecati et fuga, officia iure laborum iusto? Dolor
                      odit, id quia cum ipsam amet voluptatem, corporis
                      incidunt, at saepe atque dignissimos. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nihil obcaecati et
                      fuga, officia iure laborum iusto? Dolor odit, id quia cum
                      ipsam amet voluptatem, corporis incidunt, at saepe atque
                      dignissimos. quia cum ipsam amet voluptatem, corporis
                      incidunt, at saepe atque dignissimos. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nihil obcaecati et
                      fuga, officia iure laborum iusto? Dolor odit, id quia cum
                      ipsam amet voluptatem, corporis incidunt, at saepe atque
                      dignissimos.
                    </p>
                  </Paper>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Services />
            </Grid>
            <Grid item xs={12}>
              <Portfolio />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileMiddle;
