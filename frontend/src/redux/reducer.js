import { TYPE } from "./action";
import data from "./sampleData";

const INITIAL_STATE = {
  busDetails: {},
  addedSeats: [],
  selectedBus: {},
  busInformation: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === TYPE.busDetails) {
    return {
      ...state,
      busDetails: action.payload,
    };
  } else if (action.type === TYPE.busInformation) {
    return {
      ...state,
      busInformation: action.payload,
    };
  } else if (action.type === TYPE.addSeats) {
    const bus = {
      ...state.selectedBus,
    };
    bus.seletedSeats = [action.payload, ...bus.seletedSeats];
    return {
      ...state,
      selectedBus: bus,
    };
  } else if (action.type === TYPE.selectBus) {
    return {
      ...state,
      selectedBus: action.payload,
    };
  } else if (action.type === TYPE.userDetails) {
    const details = {
      ...state.selectedBus,
      userDetails: action.payload,
    };

    return {
      ...state,
      selectedBus: details,
    };
  }

  return state;
};

export default reducer;
