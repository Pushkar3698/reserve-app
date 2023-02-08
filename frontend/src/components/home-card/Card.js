import React from "react";

export const Card = ({ image, text1, text2 }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" width={"160px"} />
      </div>
      <div className="middle-text">
        <p style={{ fontWeight: "700", fontSize: "20px" }}>{text1}</p>
      </div>
      <div className="last-text">
        <p style={{ color: "grey", fontSize: "12px" }}>{text2}</p>
      </div>
    </div>
  );
};
