import React, { useState } from "react";
import "./Value.css";
const Values = () => {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const values = [
    {
      id: 1,
      image: "./images/Altruistic.svg",
      title: "Altruistic",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
      active: value1,
    },
    {
      id: 2,
      image: "./images/Humanitarian.svg",
      title: "Humanitarian",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
      active: value2,
    },
    {
      id: 3,
      image: "./images/Engaging.svg",
      title: "Engaging",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
      active: value3,
    },
    {
      id: 4,
      image: "./images/Effortless.svg",
      title: "Effortless",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
      active: value4,
    },
  ];

  function handleClick(id) {
    setValue1(false);
    setValue2(false);
    setValue3(false);
    setValue4(false);
    switch (id) {
      case 1:
        setValue1(true);

        break;
      case 2:
        setValue2(true);

        break;
      case 3:
        setValue3(true);
        break;
      case 4:
        setValue4(true);
        break;
      default:
        setValue1(true);
    }
  }

  return (
    <div className="values">
      <div className="value-banner">
        <img src="./images/values-banner.svg" alt="" />
      </div>
      <button className="acc-submit-btn">Join us now</button>
      <div className="values-title">Our Values</div>
      <div className="values-container">
        <div className="values-title-container">
          {values.map((value) => (
            <div
              className={"value-title " + (value.active ? "value-active" : "")}
              onClick={() => handleClick(value.id)}
            >
              <img src={value.image} alt="" />
              <span>{value.title}</span>
            </div>
          ))}
        </div>
        <div className="values-detail-container">
          {values.map((value) => (
            <div className={value.active ? "show-detail" : "hide-detail"}>
              <p>
                <strong> {value.title}:</strong>
                {value.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Values;
