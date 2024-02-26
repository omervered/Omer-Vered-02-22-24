import HttpService from "./http-service";

const CURR_WEATHER_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";
const FIVE_DAY_FORECAST_BASE_URL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";

function getWeather({ cityKey }) {
  const url = `${CURR_WEATHER_BASE_URL}/${cityKey}`;
  return HttpService.get(`${CURR_WEATHER_BASE_URL}/${cityKey}`, {
    apikey: "GbouZoRmjGkIOk6VgGTYAlFOIMrLp8eA",
  });
}

function getFullWeather({ cityKey, metric }) {
  return HttpService.get(`${FIVE_DAY_FORECAST_BASE_URL}/${cityKey}`, {
    apikey: "GbouZoRmjGkIOk6VgGTYAlFOIMrLp8eA",
    metric,
  });
}

export const weatherService = {
  getWeather,
  getFullWeather,
};
