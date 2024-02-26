import HttpService from "./http-service";
import { localStorageService } from "./local-storage";

const CURR_WEATHER_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";
const FIVE_DAY_FORECAST_BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";

const STORAGE_KEY = "weatherDB";

function getWeather({ cityKey }) {
  const url = `${CURR_WEATHER_BASE_URL}/${cityKey}`;
  return HttpService.get(`${CURR_WEATHER_BASE_URL}/${cityKey}`, {
    apikey: "4F5aERCEIyBnEAXBGRsl9L7T8GPTTyJs",
  });
}

function getFullWeather({ cityKey, metric }) {
  return HttpService.get(`${FIVE_DAY_FORECAST_BASE_URL}/${cityKey}`, {
    apikey: "4F5aERCEIyBnEAXBGRsl9L7T8GPTTyJs",
    metric,
  });
}

function loadFavorites() {
  return localStorageService.query(STORAGE_KEY);
}

function addToFavorites({ cityKey, cityName }) {
  return localStorageService.post(STORAGE_KEY, { cityKey, cityName });
}

function removeFromFavorites({ cityKey }) {
  return localStorageService.remove(STORAGE_KEY, cityKey);
}

function isCityInFavorites({ cityKey }) {
  const cities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return cities.some((city) => city.cityKey === cityKey);
}

export const weatherService = {
  getWeather,
  getFullWeather,
  addToFavorites,
  removeFromFavorites,
  isCityInFavorites,
  loadFavorites,
};
