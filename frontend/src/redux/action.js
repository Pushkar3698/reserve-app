export const TYPE = {
  busDetails: "BUS_DETAILS",
  busInformation: "BUS_INFORMATION",
  addSeats: "ADD_SEATS",
  selectBus: "SELECT_BUS",
  userDetails: "USER-DETAILS",
};

export const bus_Details = (data) => {
  return {
    type: TYPE.busDetails,
    payload: data,
  };
};
export const bus_Information = (data) => {
  return {
    type: TYPE.busInformation,
    payload: data,
  };
};
export const add_seats = (data) => {
  return {
    type: TYPE.addSeats,
    payload: data,
  };
};
export const select_bus = (data) => {
  return {
    type: TYPE.selectBus,
    payload: data,
  };
};
export const user_Details = (data) => {
  return {
    type: TYPE.userDetails,
    payload: data,
  };
};
