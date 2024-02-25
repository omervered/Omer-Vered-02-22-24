import { getFullWeather, getWeather } from "../../redux/actions/weather.action";
import HttpService from "../../services/http-service";

const API_KEY = "GbouZoRmjGkIOk6VgGTYAlFOIMrLp8eA";

export default function useConnectAutoCompleteComponent() {
  const fetchCityAutoComplete = async ({ searchString }) => {
    try {
      const response = await HttpService.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete`, {
        apikey: API_KEY,
        q: searchString,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching city autocomplete:", error);
      throw error;
    }
  };

  const fetchCurrentWeather = async ({ cityKey }) => {
    try {
      await getWeather({ cityKey });
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
    }
  };

  const fetchFullWeatherForecast = async ({ cityKey }) => {
    try {
      await getFullWeather({ cityKey });
    } catch (error) {
      console.error("Error fetching full weather forecast:", error);
      throw error;
    }
  };

  return { fetchCityAutoComplete, fetchCurrentWeather, fetchFullWeatherForecast };
}
