import { Paper } from "@mui/material";
import React from "react";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div>
      <Paper
        elevation={5}
        style={{
          padding: "20px",
        }}
      >
        <div className="services-title-container">
          <p className="services-title">Portfolio</p>
          <p className="services-subtitle">
            62 projects <span>performed by Business name</span>
          </p>
        </div>
        <div className="portfolio-cards-container">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="portfolio-card">
              <img src="./images/portfolio-1.svg" alt="" />
            </div>
          ))}
        </div>
        <div className="load-more">Load More</div>
      </Paper>
    </div>
  );
};

export default Portfolio;
