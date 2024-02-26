import { useSelector } from "react-redux";

export default function useConnectHomePageConnector() {
  const currentWeather = useSelector((storeState) => storeState.weatherModule.currentWeather);
  const fullWeather = useSelector((storeState) => storeState.weatherModule.fullWeather);
  const currentCityKey = useSelector((storeState) => storeState.weatherModule.cityKey);

  return {
    currentWeather,
    fullWeather,
    currentCityKey,
  };
}
