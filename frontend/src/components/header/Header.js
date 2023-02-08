import React from "react";
import { Button } from "../ui/button/Button";
import "./style.css";
import logo from "../../resources/bus-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src={logo} alt="" width={"50px"} />
          <p>RESERVE</p>
        </div>
        <div className="header-links">
          <a href="">Ticket</a>
        </div>
        <div className="header-links">
          <a href="">Contact us</a>
        </div>
      </div>
      <div className="header-right">
        <div>
          <Button name={"Login"} />
        </div>

        <div className="header-register">Register</div>
      </div>
    </div>
  );
};
