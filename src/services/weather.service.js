import HttpService from "./http-service";
import { localStorageService } from "./local-storage";

const CURR_WEATHER_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";
const FIVE_DAY_FORECAST_BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";

const STORAGE_KEY = "weatherDB";

function getWeather({ cityKey }) {
  const url = `${CURR_WEATHER_BASE_URL}/${cityKey}`;
  return HttpService.get(`${CURR_WEATHER_BASE_URL}/${cityKey}`, {
    apikey: "Kl7aARxfBSfbw2M9PUqjnAy3zFb1SpBb",
  });
}

function getFullWeather({ cityKey, metric }) {
  return HttpService.get(`${FIVE_DAY_FORECAST_BASE_URL}/${cityKey}`, {
    apikey: "Kl7aARxfBSfbw2M9PUqjnAy3zFb1SpBb",
    metric,
  });
}

function addToFavorites({ cityKey }) {
  const cities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  if (!cities.includes(cityKey)) {
    cities.push(cityKey);
    localStorageService.post(STORAGE_KEY, cities);
  }
}

function removeFromFavorites({ cityKey }) {
  return localStorageService.remove(STORAGE_KEY, cityKey);
}

function isCityInFavorites({ cityKey }) {
  const cities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const isCityInFavorites = cities.includes(cityKey);
  return isCityInFavorites;
}

export const weatherService = {
  getWeather,
  getFullWeather,
  addToFavorites,
  removeFromFavorites,
  isCityInFavorites,
};
