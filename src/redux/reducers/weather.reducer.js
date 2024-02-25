export const SET_WEATHER = "SET_WEATHER";
export const SET_CITY_NAME = "SET_CITY_NAME";
export const SET_FULL_WEATHER = "SET_FULL_WEATHER";

const initialState = {
  currentWeather: null,
  cityName: "",
  fullWeather: [],
};

export function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, currentWeather: action.payload };

    case SET_CITY_NAME:
      return { ...state, cityName: action.payload };

    case SET_FULL_WEATHER:
      return { ...state, fullWeather: action.payload };

    default:
      return state;
  }
}
