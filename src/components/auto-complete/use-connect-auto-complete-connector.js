import { useSelector } from "react-redux";

import { getFullWeather, getWeather } from "../../redux/actions/weather.action";
import HttpService from "../../services/http-service";

const API_KEY = "5GihREl8MDQobGqCJK5UbyzVGQ1N91VO";

export default function useConnectAutoCompleteConnector() {
  const fetchCityAutoComplete = async ({ searchString }) => {
    try {
      const response = await HttpService.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete`, {
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

  const fetchFullWeatherForecast = async ({ cityKey, metric }) => {
    try {
      await getFullWeather({ cityKey, metric });
    } catch (error) {
      console.error("Error fetching full weather forecast:", error);
      throw error;
    }
  };

  const currentCityKey = useSelector((storeState) => storeState.weatherModule.cityKey);

  const isMetric = useSelector((storeState) => storeState.weatherModule.isMetric);

  return { fetchCityAutoComplete, fetchCurrentWeather, fetchFullWeatherForecast, currentCityKey, isMetric };
}
