import React from "react";
import BusCardLeft from "../bus-display/BusCardLeft";
import "./style.css";
import tick from "../../resources/tick.png";
import BookingDetails from "./BookingDetails";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const { selectedBus } = useSelector((state) => state.reducer);

  return (
    <div className="payment-page-container">
      <div className="payment-booking">
        <div className="upper-booking">
          <div className="booking-img">
            <img src={tick} alt="" width={"100px"} />
          </div>
          <div className="booking-heading">Booking Has Been confirmed</div>
          <BookingDetails userDetails={selectedBus.userDetails} />
        </div>
        <div className="lower-booking">
          <div className="bus-card-container">
            <BusCardLeft data={selectedBus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
