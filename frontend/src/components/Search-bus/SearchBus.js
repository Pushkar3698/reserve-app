import React, { useState, useEffect } from "react";
import background from "../../resources/background.webp";
import { Button } from "../ui/button/Button";
import SearchOutput from "./SearchOutput";
import SearchTime from "./SearchTime";
import "./style.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { bus_Details } from "../../redux/action";

export const SearchBus = () => {
  const [details, setdetails] = useState({
    to: "",
    from: "",
    date: new Date(),
  });
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [routes, setroutes] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getRoutes = async () => {
    const fetchdata = await fetch("http://localhost:8001/getRoutes");
    const res = await fetchdata.json();
    setroutes(res);
  };

  useEffect(() => {
    getRoutes();
  }, []);

  const sourceCity = routes.map((el, i) => {
    return {
      source: el.source,
    };
  });

  const destinationCity = routes
    .filter((el, i) => {
      return el.source === details.to;
    })
    .map((el, i) => {
      return {
        source: el.destination,
      };
    });

  const detailsHandler = (val, x) => {
    setdetails((prev) => {
      return {
        ...prev,
        [x]: val,
      };
    });
  };

  const getDateHandler = (val) => {
    setdetails((prev) => {
      return {
        ...prev,
        date: val,
      };
    });
  };

  const searchBusHandler = async () => {
    const fetchdata = await fetch("http://localhost:8001/getDetails", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await fetchdata.json();

    if (res.error) {
      seterror(true);
      seterrorMessage(res.message);
      return;
    } else {
      dispatch(bus_Details(details));

      navigate(`/bus-display/routeId=${res[0]._id}&date=${details.date}`);
    }
  };

  return (
    <div className="search-bus-container">
      <img src={background} alt="" />

      <div className="search-inputs">
        <div className="input-container">
          <SearchOutput
            where={"to"}
            cityName={details.to}
            getDetails={detailsHandler}
            cityData={sourceCity}
            search={true}
          />
          <SearchOutput
            where={"from"}
            cityName={details.from}
            getDetails={detailsHandler}
            cityData={destinationCity}
          />
          <SearchTime getDateHandler={getDateHandler} />
        </div>

        <div className="submit-search-input" onClick={searchBusHandler}>
          <Button name={"Search"} />
        </div>
      </div>
    </div>
  );
};
