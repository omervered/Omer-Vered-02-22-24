import { useSelector } from "react-redux";

export default function useConnectCardsViewConnector() {
  const currentWeather = useSelector((storeState) => storeState.weatherModule.currentWeather);
  const currentCity = useSelector((storeState) => storeState.weatherModule.cityName);

  return {
    currentWeather,
    currentCity,
  };
}
