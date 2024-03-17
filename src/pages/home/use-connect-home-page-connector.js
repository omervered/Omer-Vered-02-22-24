import { useSelector } from "react-redux";

export default function useConnectHomePageConnector() {
  const currentWeather = useSelector((storeState) => storeState.weatherModule.currentWeather);
  const fullWeather = useSelector((storeState) => storeState.weatherModule.fullWeather);
  const isGeolocationAllowed = useSelector((storeState) => storeState.weatherModule.geolocationIsAllowed);

  return {
    currentWeather,
    fullWeather,
    isGeolocationAllowed,
  };
}
