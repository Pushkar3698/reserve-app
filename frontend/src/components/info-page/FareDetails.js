import React from "react";
import { Button } from "../ui/button/Button";

const FareDetails = ({ price, onSubmitHandler }) => {
  return (
    <div className="fare-details-container">
      <div className="travel-details-heading" style={{ margin: 0 }}>
        FareDetails
      </div>
      <div className="fare-detail-container">
        <div className="fare-detail">
          <span className="fare-detail-content">Base Fare</span>
          <span className="fare-amt">{price}</span>
        </div>
        <div className="fare-detail">
          <span className="fare-detail-content">Tax</span>
          <span className="fare-amt">0</span>
        </div>
        <div className="fare-detail">
          <span className="fare-detail-content">Offer Applied</span>
          <span className="fare-amt">0</span>
        </div>
      </div>
      <div className="fare-detail">
        <span className="fare-detail-content">Total Price</span>
        <span
          className="fare-amt"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          {price}
        </span>
      </div>

      <div className="fare-btn" onClick={onSubmitHandler}>
        <Button name={"Proceed To Payment"} />
      </div>
    </div>
  );
};

export default FareDetails;
