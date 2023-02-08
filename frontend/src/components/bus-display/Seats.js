import React from "react";
import Seat from "./Seat";

const mergeSeats = (obj) => {
  let result = [];

  for (const key in obj) {
    result = result.concat(obj[key]);
  }
  return result;
};

const Seats = ({ seats, selectedSeats }) => {
  let upper = mergeSeats(seats);

  const includes = (val) => {
    return selectedSeats.some((el) => el.seatName === val);
  };

  return (
    <div className="bus-seats-component">
      <div className="bus-upper-seats">
        <div className="upper-seat">
          {upper.map((el, i) => (
            <Seat
              key={i}
              seatName={el.category + el.seat}
              userSeats={selectedSeats}
              includes={includes(el.category + el.seat)}
              price={el.price}
            />
          ))}
        </div>
        <div className="upper-seat">
          {/* {lower.map((el, i) => (
            <Seat
              key={el.category + el.seat}
              seatName={el.category + el.seat}
              userSeats={selectedSeats}
              includes={includes(el.category + el.seat)}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Seats;
