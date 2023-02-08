import React from "react";
import { Card } from "./Card";
import "./style.css";
import logo from "../../resources/bus-logo.png";

const data = [
  {
    image: logo,
    text1: "2000 +",
    text2: "bus collection",
  },
  {
    image: logo,
    text1: "20 Million",
    text2: "happy customers globally",
  },
  {
    image: logo,
    text1: "5000 +",
    text2: "tickets book everyday",
  },
];

export const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-heading">
        <h2>Travel with worlds largest bus</h2>
      </div>
      <div className="cards">
        {data.map((el, i) => (
          <Card key={i} image={el.image} text1={el.text1} text2={el.text2} />
        ))}
      </div>
    </div>
  );
};
