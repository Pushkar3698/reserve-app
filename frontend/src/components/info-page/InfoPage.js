import React, { useRef } from "react";
import BusCardLeft from "../bus-display/BusCardLeft";
import FareDetails from "./FareDetails";
import InputContainer from "./InputContainer";
import "./style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { payement_succesful } from "../../redux/action";
import { useParams } from "react-router-dom";

const InfoPage = () => {
  const { selectedBus, busInformation } = useSelector((state) => state.reducer);

  const price = selectedBus.seletedSeats.length * selectedBus.fare;

  let { date } = useParams();

  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const age = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    const data = {
      userName: nameRef.current.value,
      userMobile: mobileRef.current.value,
      userEmail: emailRef.current.value,
      userGender: genderRef.current.value,
      userAge: age.current.value,
      busId: selectedBus._id,
      selectedSeats: selectedBus.seletedSeats,
      totalPrice: price,
      dateOfJourney: new Date(date.split("=")[1]),
      routeId: busInformation[0]._id,
    };

    const fetchdata = await fetch("http://localhost:8001/bookTicket", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await fetchdata.json();
    console.log(res);
    dispatch(payement_succesful(res));
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
