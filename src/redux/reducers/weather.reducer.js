const initialState = {
  shownWeather: null,
};

export default function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, shownWeather: action.payload };
    default:
      return state;
  }
}
