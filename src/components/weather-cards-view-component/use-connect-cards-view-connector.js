import { useSelector } from "react-redux";

export default function useConnectCardsViewConnector() {
  const currentCityName = useSelector((storeState) => storeState.weatherModule.cityName);
  const currentCityKey = useSelector((storeState) => storeState.weatherModule.cityKey);
  const isMetric = useSelector((storeState) => storeState.weatherModule.isMetric);

  return {
    currentCityName,
    currentCityKey,
    isMetric,
  };
}
