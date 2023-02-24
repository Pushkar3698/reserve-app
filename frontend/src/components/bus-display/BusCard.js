import React, { useState } from "react";
import { Button } from "../ui/button/Button";
import "./busCard.css";
import BusCardLeft from "./BusCardLeft";
import BusSeats from "./BusSeats";
import { useDispatch, useSelector } from "react-redux";
import { select_bus, unavailable_seats } from "../../redux/action";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BusCard = ({
  busData,
  busId,
  arrivalTime,
  departureTime,
  destination,
  source,
}) => {
  const [seatDisplay, setseatDisplay] = useState(false);
  const { selectedBus, busDetails } = useSelector((state) => state.reducer);

  const { date } = busDetails;
  const { seats } = busData;
  let { routeId } = useParams();

  const bus = {
    busId,
    arrivalTime,
    departureTime,
    destination,
    source,
  };

  const dispatch = useDispatch();

  const seatDisplayHandler = async () => {
    dispatch(select_bus({ ...busData, seletedSeats: [] }));

    const data = {
      routeId: routeId.split("&")[0].split("=")[1],
      date: new Date(routeId.split("&")[1].split("=")[1]),
      busId: busId,
    };

    const fetchdata = await fetch("http://localhost:8001/getSeats", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await fetchdata.json();

    if (res.length !== 0) {
      dispatch(unavailable_seats(res, data.busId));
    }
    setseatDisplay(!seatDisplay);
  };

  return (
    <>
      <motion.div
        className="bus-card"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      >
        <div className="bus-card-content">
          <BusCardLeft
            data={busData}
            routeId={routeId}
            arrivalTime={arrivalTime}
            departureTime={departureTime}
            destination={destination}
            source={source}
          />
          <div className="bus-card-right">
            <div className="bus-right-text">
              <p className="bus-cost">Trip Cost</p>
              <p>starting from</p>
              <p className="bus-price">$ 300</p>
            </div>
            <div className="bus-right-btn" onClick={seatDisplayHandler}>
              <Button name={"View Seat"} />
            </div>
          </div>
        </div>
        {seatDisplay && (
          <BusSeats
            seats={seats}
            selectedSeats={selectedBus.seletedSeats}
            selectedBus={{ selectedBus, bus }}
          />
        )}
      </motion.div>
    </>
  );
};

export default BusCard;
