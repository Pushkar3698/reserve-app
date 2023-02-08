import React from "react";
import log from "../../resources/bus-logo.png";

export const CustomerCard = () => {
  return (
    <div className="customer-card">
      <div className="customer-section-head">
        <div className="customer-img">
          <img src={log} alt="" width={"70px"} />
        </div>

        <div className="customer-details">
          <p style={{ fontSize: "18px", fontWeight: "600" }}>Vatsal Aggarwal</p>
          <p style={{ fontSize: "12px" }}>customer since 2020</p>
        </div>
      </div>
      <div className="customer-rating">
        <span>4.5</span>
      </div>
      <div className="customer-feedback">
        Awesome travel experience with reserve
      </div>
    </div>
  );
};
