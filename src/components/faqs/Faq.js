import React, { useState } from "react";
import "./Faqs.css";
const Faq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="faq" onClick={handleClick}>
      <div className="question-container">
        <p className="faq-question">{faq.question}</p>
        <img
          src="./images/arrow.svg"
          alt=""
          className={showAnswer ? "arrow-up" : "arrow-down"}
        />
      </div>
      <p className={showAnswer ? "show-answer" : "hide-answer"}>{faq.answer}</p>
    </div>
  );
};

export default Faq;
