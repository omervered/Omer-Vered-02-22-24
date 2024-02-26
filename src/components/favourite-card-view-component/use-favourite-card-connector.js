import { useSelector } from "react-redux";

export function useFavouriteCardConnector() {
  const isMetric = useSelector((storeState) => storeState.weatherModule.isMetric);

  return {
    isMetric,
  };
}
