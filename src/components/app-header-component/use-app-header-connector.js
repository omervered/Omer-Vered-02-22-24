import { useSelector } from "react-redux";

export function useAppHeaderConnector() {
  const isDarkMode = useSelector((state) => state.themeModule.isDarkMode);

  return {
    isDarkMode,
  };
}
