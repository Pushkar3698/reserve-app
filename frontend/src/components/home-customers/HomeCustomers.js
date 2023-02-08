import React from "react";
import { CustomerCard } from "./CustomerCard";
import "./style.css";

export const HomeCustomers = () => {
  return (
    <div className="home-customer-section">
      <div className="home-card-heading" style={{ margin: "50px 0" }}>
        <h2>Here's what a few of our customers have to say about us </h2>
      </div>
      <div className="cards" style={{ backgroundColor: "#d3d3d345" }}>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
};
