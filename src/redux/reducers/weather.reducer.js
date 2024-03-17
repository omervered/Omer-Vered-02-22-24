export const SET_WEATHER = "SET_WEATHER";
export const SET_CITY_NAME = "SET_CITY_NAME";
export const SET_FULL_WEATHER = "SET_FULL_WEATHER";
export const SET_CITY_KEY = "SET_CITY_KEY";
export const REMOVE_CITY_KEY = "REMOVE_CITY_KEY";
export const SET_GEOLOCATION = "SET_GEOLOCATION";
export const SET_IS_METRIC = "SET_IS_METRIC";
export const SET_GEOLOCATION_IS_ALLOWED = "SET_GEOLOCATION_IS_ALLOWED";

const initialState = {
  currentWeather: null,
  cityName: "",
  fullWeather: [],
  cityKey: null,
  geolocation: null,
  isMetric: true,
  geolocationIsAllowed: true,
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

    case SET_IS_METRIC:
      return { ...state, isMetric: action.payload };

    case SET_GEOLOCATION_IS_ALLOWED:
      return { ...state, geolocationIsAllowed: action.payload };

    default:
      return state;
  }
}
