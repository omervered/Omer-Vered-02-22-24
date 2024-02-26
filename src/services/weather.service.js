import HttpService from "./http-service";
import { localStorageService } from "./local-storage";

const CURR_WEATHER_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";
const FIVE_DAY_FORECAST_BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";

const API_KEY = "yZzcZcY0zR57JQIKTUxt8ZdaYgdmUIQ6";

const STORAGE_KEY = "weatherDB";

function getWeather({ cityKey }) {
  const url = `${CURR_WEATHER_BASE_URL}/${cityKey}`;
  return HttpService.get(`${CURR_WEATHER_BASE_URL}/${cityKey}`, {
    apikey: API_KEY,
  });
}

function getFullWeather({ cityKey, metric }) {
  return HttpService.get(`${FIVE_DAY_FORECAST_BASE_URL}/${cityKey}`, {
    apikey: API_KEY,
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

function getGeolocation(latitude, longitude) {
  return HttpService.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search", {
    apikey: API_KEY,
    q: `${latitude},${longitude}`,
  });
}

export const weatherService = {
  getWeather,
  getFullWeather,
  addToFavorites,
  removeFromFavorites,
  isCityInFavorites,
  loadFavorites,
  getGeolocation,
};
