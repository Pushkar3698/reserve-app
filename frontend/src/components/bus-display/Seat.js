import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_seats } from "../../redux/action";

const Seat = ({ seatName, includes, price }) => {
  const dispatch = useDispatch();

  const seatHandler = () => {
    const seatData = {
      seatName,
      category: seatName[0],
      seat: +seatName[1],
      price: price,
    };

    dispatch(add_seats(seatData));
  };

  return (
    <span
      className="seat"
      style={{
        backgroundColor: `${includes ? "blue" : ""}`,
      }}
      onClick={seatHandler}
    ></span>
  );
};

export default Seat;
