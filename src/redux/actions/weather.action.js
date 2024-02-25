import { store } from "../store";
import { SET_CITY_NAME, SET_FULL_WEATHER, SET_WEATHER } from "../reducers/weather.reducer";

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

export async function getFullWeather({ cityKey }) {
  try {
    const response = await weatherService.getFullWeather({ cityKey });
    store.dispatch({ type: SET_FULL_WEATHER, payload: response.data.DailyForecasts });
  } catch (error) {
    console.error("Error fetching full weather forecast:", error);
    throw error;
  }
}

export function setCityName(cityName) {
  store.dispatch({ type: SET_CITY_NAME, payload: cityName });
}
