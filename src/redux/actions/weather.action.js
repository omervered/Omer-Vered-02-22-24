import { store } from "../store";
import {
  REMOVE_CITY_KEY,
  SET_CITY_KEY,
  SET_CITY_NAME,
  SET_FULL_WEATHER,
  SET_WEATHER,
  SET_GEOLOCATION,
} from "../reducers/weather.reducer";

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

export async function getFullWeather({ cityKey, metric }) {
  try {
    const response = await weatherService.getFullWeather({ cityKey, metric });
    store.dispatch({ type: SET_FULL_WEATHER, payload: response.data.DailyForecasts });
  } catch (error) {
    console.error("Error fetching full weather forecast:", error);
    throw error;
  }
}

export async function getGeolocation() {
  if (!navigator.geolocation) {
    console.error("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const geolocationData = await weatherService.getGeolocation(latitude, longitude);

        store.dispatch({ type: SET_GEOLOCATION, payload: geolocationData.data.EnglishName });
        setCityName(geolocationData.data.EnglishName);

        const cityKey = geolocationData.data.Key;
        setCityKey(cityKey);

        await getWeather({ cityKey });
        await getFullWeather({ cityKey, metric: true });
      } catch (error) {
        console.error("Error fetching geolocation and weather data:", error);
      }
    },
    (error) => {
      console.error("Geolocation error:", error);
    }
  );
}

export function setCityName(cityName) {
  store.dispatch({ type: SET_CITY_NAME, payload: cityName });
}

export function setCityKey(cityKey) {
  store.dispatch({ type: SET_CITY_KEY, payload: cityKey });
}

export function removeCityKey() {
  store.dispatch({ type: REMOVE_CITY_KEY });
}
