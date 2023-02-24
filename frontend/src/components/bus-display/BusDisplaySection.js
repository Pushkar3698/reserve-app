import React, { useEffect } from "react";
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
  const route = routeId.split("&")[0].split("=")[1];

  const getRoutesFromId = async (id) => {
    const fetchdata = await fetch(`http://localhost:8001/bus-display/${id}`, {
      method: "GET",
    });

    const res = await fetchdata.json();

    dispatch(bus_Information([res]));
  };

  useEffect(() => {
    getRoutesFromId(route);
  }, []);

  const getTime = (arr, str) => {
    const findRoute = arr.find(
      (el, i) => el.routeId.toString() === route.toString()
    );

    return findRoute[str];
  };

  return (
    <div className="bus-container">
      <SideBar />
      <div className="bus-cards">
        {busInformation.length > 0 &&
          busInformation[0].buses.map((el, i) => (
            <BusCard
              key={el._id}
              busId={el._id}
              arrivalTime={getTime(el.routes, "Departuretime")}
              departureTime={getTime(el.routes, "Reachingtime")}
              destination={busInformation[0].destination}
              source={busInformation[0].source}
              busData={el}
            />
          ))}
      </div>
    </div>
  );
};
