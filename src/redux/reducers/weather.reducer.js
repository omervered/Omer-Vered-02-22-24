export const SET_WEATHER = "SET_WEATHER";

const initialState = {
  shownWeather: null,
};

export function weatherReducer(state = initialState, action = {}) {
  let shownWeather;

  switch (action.type) {
    case SET_WEATHER:
      return { ...state, shownWeather: action.payload };
    default:
      return state;
  }
}
