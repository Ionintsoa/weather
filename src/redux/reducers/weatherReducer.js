const INITIAL_STATE = {
  weather: null,
};

const actions = {
  SET_WEATHER: "SET_WEATHER",
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_WEATHER: {
      return {
        ...state,
        weather: action.payload,
      };
    }
    default:
      return state;
  }
}

export default weatherReducer;

export const getWeather =
  ({ country, lon, lat }) =>
  (dispatch) => {
    let query = "";
    if (
      lon !== null &&
      lat !== null &&
      lon !== undefined &&
      lat !== undefined
    ) {
      query = `lon=${lon}&lat=${lat}`;
    } else if (country !== null && country !== "" && country !== undefined) {
      query = `q=${country}`;
    }

    if (query.length > 0)
      fetch(
        `${process.env.REACT_APP_API_URL}/weather/?units=${process.env.REACT_APP_API_UNIT}&appid=${process.env.REACT_APP_API_KEY}&${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: actions.SET_WEATHER,
            payload: data,
          });
        });
  };
