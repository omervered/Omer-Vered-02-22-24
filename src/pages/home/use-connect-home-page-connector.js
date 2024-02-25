import { useSelector } from "react-redux";

export default function useConnectHomePageConnector() {
  const currentWeather = useSelector((storeState) => storeState.weatherModule.currentWeather);
  const fullWeather = useSelector((storeState) => storeState.weatherModule.fullWeather);

  return {
    currentWeather,
    fullWeather,
  };
}
