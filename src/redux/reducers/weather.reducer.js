export const SET_WEATHER = "SET_WEATHER";
export const SET_CITY_NAME = "SET_CITY_NAME";
export const SET_FULL_WEATHER = "SET_FULL_WEATHER";
export const SET_CITY_KEY = "SET_CITY_KEY";
export const REMOVE_CITY_KEY = "REMOVE_CITY_KEY";
export const SET_GEOLOCATION = "SET_GEOLOCATION";

const initialState = {
  currentWeather: null,
  cityName: "",
  fullWeather: [],
  cityKey: null,
  geolocation: null,
};

export function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, currentWeather: action.payload };

    case SET_CITY_NAME:
      return { ...state, cityName: action.payload };

    case SET_FULL_WEATHER:
      return { ...state, fullWeather: action.payload };

    case SET_CITY_KEY:
      return { ...state, cityKey: action.payload };

    case REMOVE_CITY_KEY:
      return { ...state, cityKey: null };

    case SET_GEOLOCATION:
      return { ...state, geolocation: action.payload };

    default:
      return state;
  }
}
