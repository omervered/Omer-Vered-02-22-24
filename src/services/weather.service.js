import HttpService from "./http-service";

const CURR_WEATHER_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";

export const weatherService = {
  getWeather,
};

function getWeather({ cityKey }) {
  return HttpService.get(`${CURR_WEATHER_BASE_URL}/${cityKey}`, {
    apiKey: "3hcZAkNEp7h4rU8Yto1YI2nns2FE4jUI",
  });
}
