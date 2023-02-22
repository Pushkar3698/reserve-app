import React, { useEffect, useState } from "react";
import BusCard from "./BusCard";
import SideBar from "./SideBar";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bus_Information } from "../../redux/action";

export const BusDisplaySection = () => {
  const { busInformation } = useSelector((state) => state.reducer);

  let { routeId } = useParams();

  const dispatch = useDispatch();

  const getRoutesFromId = async (id) => {
    const fetchdata = await fetch(`http://localhost:8001/bus-display/${id}`, {
      method: "GET",
    });

    const res = await fetchdata.json();

    dispatch(bus_Information([res]));
  };

  useEffect(() => {
    getRoutesFromId(routeId.split("&")[0].split("=")[1]);
  }, []);

  return (
    <div className="bus-container">
      <SideBar />
      <div className="bus-cards">
        {busInformation.length > 0 &&
          busInformation[0].buses.map((el, i) => (
            <BusCard
              key={el._id}
              busId={el._id}
              arrivalTime={busInformation[0].arrivalTime}
              departureTime={busInformation[0].departureTime}
              destination={busInformation[0].destination}
              source={busInformation[0].source}
              busData={el}
            />
          ))}
      </div>
    </div>
  );
};
