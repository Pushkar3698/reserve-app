import React from "react";

const BusCardLeft = ({
  data,
  routeId,
  arrivalTime,
  departureTime,
  destinaton,
  source,
}) => {
  // const { name, departure, duration, _id, reachingTime, type, rating } = data;

  const { busName, type } = data;

  return (
    <div className="bus-card-left">
      <div className="bus-card-heading">
        <div className="bus-heading">
          <p>{busName}</p>
          <div className="bus-card-rating">4</div>
        </div>

        <div className="bus-details">
          <p>{type}</p>
        </div>
      </div>

      <div className="bus-itinerary">
        <p>
          <span className="bus-destination">{departureTime} </span>
          <span style={{ fontSize: "14px" }}>
            --- {} hrs {} min ---{" "}
          </span>
          <span className="bus-destination">{arrivalTime} </span>
        </p>
      </div>
      <div className="bus-actions">
        <p>
          <span>Live tracking</span>
          <span>Policies</span>
          <span>Amenities</span>
        </p>
      </div>
    </div>
  );
};

export default BusCardLeft;
