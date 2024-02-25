import { useSelector } from "react-redux";

export default function useConnectHomePageConnector() {
  const currentWeather = useSelector((storeState) => storeState.weatherModule.currentWeather);

  return {
    currentWeather,
  };
}
