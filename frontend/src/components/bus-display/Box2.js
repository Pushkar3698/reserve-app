import React from "react";

export const Box2 = ({ text, search }) => {
  return (
    <div className="box">
      <p style={{ fontWeight: "700" }}>{text}</p>
      {search && <input type="text" name="" id="" />}
      <div className="select-pickup">
        <div className="radio">
          <input type="radio" name="" id="" />
        </div>

        <label htmlFor="">Kolkata</label>
      </div>
      <div className="select-pickup">
        <div className="radio">
          <input type="radio" name="" id="" />
        </div>

        <label htmlFor="">Mumbai</label>
      </div>
      <div className="select-pickup">
        <div className="radio">
          <input type="radio" name="" id="" />
        </div>

        <label htmlFor="">Banglore</label>
      </div>
    </div>
  );
};
