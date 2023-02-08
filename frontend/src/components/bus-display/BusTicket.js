import React from "react";
import { Button } from "../ui/button/Button";
import "./BusTicket.css";
import { NavLink } from "react-router-dom";

const BusTicket = ({ selectedBus }) => {
  const seats = selectedBus.selectedBus.seletedSeats;

  const mappedSeats =
    seats.length === 0 ? "0" : seats.map((el) => el.seatName).join(",");

  const price =
    seats.length === 0 ? "0" : seats.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="bus-ticket-container">
      <div className="bus-ticket-heading">
        <p>Boarding and Dropping</p>
      </div>
      <div className="bus-ticket-destination d-flex">
        <div className="left-part">
          <p className="destination">{selectedBus.busDetails.from} </p>
          <p className="destination-sub-heading">Taxi Stand, Mughal Road</p>
        </div>
        <div className="right-part">
          <p>22:45</p>
        </div>
      </div>
      <div className="bus-ticket-destination d-flex">
        <div className="left-part">
          <p className="destination">{selectedBus.busDetails.to} </p>
          <p className="destination-sub-heading">Taxi Stand, Mughal Road</p>
        </div>
        <div className="right-part">
          <p>22:45</p>
        </div>
      </div>

      <div className="seat-number d-flex">
        <p>Seat No.</p>
        <p>{mappedSeats}</p>
      </div>
      <div className="fare-details">
        <div className="bus-ticket-heading">
          <p>Fare Details</p>
        </div>
        <div className="fare d-flex">
          <div className="fare-amount">
            <p className="destination">Amount</p>
            {/* <p className="destination-sub-heading">Taxi Stand, Mughal Road</p> */}
          </div>
          <div className="fare-price">
            <p>INR {price}</p>
          </div>
        </div>
      </div>
      <NavLink to={"/info"}>
        <div className="proceed-btn">
          <Button name={"Proceed To Book"} />
        </div>
      </NavLink>
    </div>
  );
};

export default BusTicket;
