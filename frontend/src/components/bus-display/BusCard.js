import React, { useState } from "react";
import { Button } from "../ui/button/Button";
import "./busCard.css";
import BusCardLeft from "./BusCardLeft";
import BusSeats from "./BusSeats";
import { useDispatch, useSelector } from "react-redux";
import { select_bus } from "../../redux/action";

const getMin = (arr) => {
  let result = 10000;
  for (let i = 0; i < arr.length; i++) {
    result = Math.min(result, arr[i]);
  }
  return result;
};

const BusCard = ({
  busData,
  routeId,
  arrivalTime,
  departureTime,
  destination,
  source,
}) => {
  const [seatDisplay, setseatDisplay] = useState(false);
  const { selectedBus, busDetails } = useSelector((state) => state.reducer);

  const { seats } = busData;

  const dispatch = useDispatch();

  const seatDisplayHandler = () => {
    setseatDisplay(!seatDisplay);

    dispatch(select_bus({ ...busData, seletedSeats: [] }));
  };

  return (
    <>
      <div className="bus-card">
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
            selectedBus={{ selectedBus, busDetails }}
          />
        )}
      </div>
    </>
  );
};

export default BusCard;
