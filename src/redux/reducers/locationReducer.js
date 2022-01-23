const INITIAL_STATE = {
  location: {
    country: "",
    lon: null,
    lat: null,
  },
};

const actions = {
  SET_LOCATION: "SET_LOCATION",
};

function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_LOCATION: {
      return {
        ...state,
        location: action.payload,
      };
    }
    default:
      return state;
  }
}

export default locationReducer;
