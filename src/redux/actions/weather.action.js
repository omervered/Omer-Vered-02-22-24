import { store } from "../store";
import { SET_CITY_NAME, SET_WEATHER } from "../reducers/weather.reducer";

import { weatherService } from "../../services/weather.service";

export async function getWeather({ cityKey }) {
  try {
    const response = await weatherService.getWeather({ cityKey });
    store.dispatch({ type: SET_WEATHER, payload: response.data[0] });
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}

export function setCityName(cityName) {
  store.dispatch({ type: SET_CITY_NAME, payload: cityName });
}
