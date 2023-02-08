import React, { useRef } from "react";
import BusCardLeft from "../bus-display/BusCardLeft";
import FareDetails from "./FareDetails";
import InputContainer from "./InputContainer";
import "./style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { user_Details } from "../../redux/action";

const InfoPage = () => {
  const { selectedBus } = useSelector((state) => state.reducer);

  const price = selectedBus.seletedSeats.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const age = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    const data = {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
      age: age.current.value,
    };

    dispatch(user_Details(data));
    navigate("/info/payment");
  };

  return (
    <div className="info-page-container">
      <div className="info-page-left">
        <div className="bus-card-container">
          <BusCardLeft data={selectedBus} />
        </div>
        <InputContainer
          nameRef={nameRef}
          mobileRef={mobileRef}
          emailRef={emailRef}
          genderRef={genderRef}
          age={age}
        />
      </div>
      <div className="info-page-right">
        <FareDetails price={price} onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
};

export default InfoPage;
