import { weatherService } from "../../services/weather.service";
import { store } from "../store";

export async function getWeather({ cityKey }) {
  try {
    const response = await weatherService.getWeather({ cityKey });
    store.dispatch({ type: "SET_WEATHER", payload: response.data });
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}
