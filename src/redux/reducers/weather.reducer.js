export const SET_WEATHER = "SET_WEATHER";
export const SET_CITY_NAME = "SET_CITY_NAME";

const initialState = {
  currentWeather: null,
  cityName: "",
};

export function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, currentWeather: action.payload };

    case SET_CITY_NAME:
      return { ...state, cityName: action.payload };

    default:
      return state;
  }
}
