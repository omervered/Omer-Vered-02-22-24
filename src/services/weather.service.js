import HttpService from "./http-service";
import { localStorageService } from "./local-storage";

const CURR_WEATHER_BASE_URL = "https://dataservice.accuweather.com/currentconditions/v1";
const FIVE_DAY_FORECAST_BASE_URL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day";
const GEO_POSITION_BASE_URL = "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";

const API_KEY = "JCgZ47t7gWAT1uLmSaA85svWQvLal53i";

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
  return HttpService.get(GEO_POSITION_BASE_URL, {
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
