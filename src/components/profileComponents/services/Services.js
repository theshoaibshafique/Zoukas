import React from "react";
import { Paper, Divider, List, ListItem } from "@mui/material";
import "./services.css";
const Services = () => {
  return (
    <div>
      <Paper
        elevation={5}
        style={{
          padding: "20px",
        }}
      >
        <div className="services-title-container">
          <p className="services-title">Services</p>
          <p className="services-subtitle">
            6 services <span>offered by John D.</span>
          </p>
        </div>
        <div className="services-list-container">
          <div className="services-list-headings">
            <p>Service name</p>
            <p>Statring from</p>
          </div>
          <div className="services-list">
            <List>
              {[1, 2, 3, 4].map((item) => (
                <ListItem
                  key={item}
                  sx={{ display: "flex", flexDirection: "column" }}
                  alignItems="flex-start"
                >
                  <div className="service-list-heading">
                    <p className="list-title">
                      <img src="./images/services-1.svg" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p className="list-price">
                      $50<span>/hour</span>
                    </p>
                  </div>
                  <div className="service-list-description">
                    Backyard, Business, Carpet, Decluttering
                  </div>
                  <Divider
                    sx={{
                      width: "100%",
                      background: "#88929F",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Services;
