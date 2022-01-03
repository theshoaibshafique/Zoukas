import { Grid, Paper } from "@mui/material";
import React from "react";
import Portfolio from "../portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Services from "../services/Services";
import ProfileLeft from "./ProfileLeft";
import "./profileMiddle.css";
const ProfileMiddle = () => {
  return (
    <div className="profile-middle">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className="left-desk">
          <ProfileLeft />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="left-mbl">
              <Paper
                elevation={5}
                style={{
                  padding: "20px",
                }}
              >
                <p className="total-jobs-title">12</p>
                <p className="total-jobs-text">Total Jobs Contracted</p>
              </Paper>
            </Grid>
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
            <Grid item xs={12} className="left-mbl">
              <ProfileLeft />
            </Grid>
            <Grid item xs={12}>
              <Services />
            </Grid>
            <Grid item xs={12}>
              <Portfolio />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Reviews />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileMiddle;
