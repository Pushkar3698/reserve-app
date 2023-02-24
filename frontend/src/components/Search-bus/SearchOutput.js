import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchOutput = ({ where, cityName, getDetails, cityData, search }) => {
  const [modal, setmodal] = useState(false);
  const [filter, setfilter] = useState("");

  const selectCityHander = (val) => {
    getDetails(val, where);

    setmodal(false);
  };

  return (
    <div className="input">
      <div className="search-input" onClick={() => setmodal((prev) => !prev)}>
        <p>{where}</p>
        <h3>{cityName}</h3>
        <p>India</p>
      </div>
      {modal && (
        <motion.div
          className="search-outputs"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {search && (
            <div className="search-city">
              <input
                type="text"
                name=""
                id=""
                onChange={(e) => setfilter(e.target.value)}
                value={filter}
              />
            </div>
          )}
          {cityData
            .filter((el, i) =>
              el.source.toLowerCase().includes(filter.toLowerCase())
            )
            .map((el, i) => (
              <li
                className="search-input-city"
                key={i}
                onClick={(e) => selectCityHander(e.target.textContent)}
              >
                {el.source}
              </li>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchOutput;
