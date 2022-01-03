import React from "react";
import "./Slider.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Slider = () => {
  var items = [
    {
      id: 1,
      img_url: "./images/slider-img.svg",
    },
    {
      id: 2,
      img_url: "./images/slider-img.svg",
    },
    {
      id: 3,
      img_url: "./images/slider-img.svg",
    },
  ];

  function Item({ imgUrl }) {
    return (
      <Paper>
        <div className="slider-img">
          <img src={imgUrl} alt="" />
        </div>
      </Paper>
    );
  }

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} imgUrl={item.img_url} />
      ))}
    </Carousel>
  );
};

export default Slider;
