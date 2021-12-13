import React from "react";
import "./Value.css";
const Values = () => {
  const values = [
    {
      image: "./images/Altruistic.svg",
      title: "Altruistic",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
    },
    {
      image: "./images/Humanitarian.svg",
      title: "Humanitarian",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
    },
    {
      image: "./images/Engaging.svg",
      title: "Engaging",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
    },
    {
      image: "./images/Effortless.svg",
      title: "Effortless",
      detail:
        " it’s about promoting our customers. We would never compete with them or have a long-term plan to have them replaced. Only providing a platform that truly brings value to our customers as we are fair and honest throughout the entire process.",
    },
  ];

  //   const [value1, setValue1] = useState(true);
  //   const [value2, setValue2] = useState(false);
  //   const [value3, setValue3] = useState(false);
  //   const [value4, setValue4] = useState(false);
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
            <div className="value-title">
              <img src={value.image} alt="" />
              <span>{value.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Values;
