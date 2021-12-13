import React from "react";
import Faq from "./Faq";
import "./Faqs.css";

const Faqs = () => {
  const faqs = [
    {
      question: "How Do You Pay Pros For Their Services?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam possimus reiciendis mollitia numquam consequuntur, quam eum optio ipsa id quas impedit, reprehenderit blanditiis. Dolor, reprehenderit iusto pariatur ea voluptatum facilis.",
    },
    {
      question: "Why Be a Part of Our Pro Pilot Program?",
      answer:
        "We do not obligate you to make payments through the app, however both the Pros and Clients need to acknowledge payment wascompleted. Clients & Pros agree to payment outside of the app with whatever method they prefer, cash, PayPal or Chase Zelle, Cash App, Venmo.We plan to offer In-app payment in the future, but it may require a transaction fee for payment processing provider, our goal is to make this number zero, if possible!",
    },
    {
      question: " Zouks is the App that Wants to Help You be Your Own Boss",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam possimus reiciendis mollitia numquam consequuntur, quam eum optio ipsa id quas impedit, reprehenderit blanditiis. Dolor, reprehenderit iusto pariatur ea voluptatum facilis.",
    },
  ];
  return (
    <div className="faqs">
      {faqs.map((faq) => (
        <Faq faq={faq} />
      ))}
    </div>
  );
};

export default Faqs;
