import { useSelector } from "react-redux";

import { getFullWeather, getWeather } from "../../redux/actions/weather.action";
import HttpService from "../../services/http-service";

const API_KEY = "4F5aERCEIyBnEAXBGRsl9L7T8GPTTyJs";

export default function useConnectAutoCompleteConnector() {
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

  const fetchFullWeatherForecast = async ({ cityKey, metric }) => {
    try {
      await getFullWeather({ cityKey, metric });
    } catch (error) {
      console.error("Error fetching full weather forecast:", error);
      throw error;
    }
  };

  const currentCityKey = useSelector((storeState) => storeState.weatherModule.cityKey);

  return { fetchCityAutoComplete, fetchCurrentWeather, fetchFullWeatherForecast, currentCityKey };
}
