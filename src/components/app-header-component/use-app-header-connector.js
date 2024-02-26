import { useSelector } from "react-redux";

export function useAppHeaderConnector() {
  const isDarkMode = useSelector((state) => state.themeModule.isDarkMode);
  const isMetric = useSelector((state) => state.weatherModule.isMetric);

  return {
    isDarkMode,
    isMetric,
  };
}
