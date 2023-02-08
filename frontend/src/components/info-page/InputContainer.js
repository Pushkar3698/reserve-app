import React from "react";

const InputContainer = ({ nameRef, genderRef, age, emailRef, mobileRef }) => {
  return (
    <>
      <div className="travel-details">
        <div className="travel-details-container">
          <div className="travel-details-heading">Enter Traveller Details</div>
        </div>
        <div className="travel-details-input">
          <div className="passenger-details">
            <span>Passenger 1</span>
            <span>Seat 16</span>
          </div>
          <div className="upper-input">
            <div className="details-input">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" ref={nameRef} />
            </div>
            <div className="details-input">
              <label htmlFor="">Gender</label>
              <input type="text" name="" id="" ref={genderRef} />
            </div>
            <div className="details-input">
              <label htmlFor="">Age {"(in years)"}</label>
              <input type="text" name="" id="" ref={age} />
            </div>
          </div>
          <div className="lower-input">
            <div className="details-input">
              <label htmlFor="">Email ID</label>
              <input type="text" name="" id="" ref={emailRef} />
            </div>
            <div className="details-input">
              <label htmlFor="">Mobile No</label>
              <input type="text" name="" id="" ref={mobileRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
