import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

import { setTheme } from "../../redux/actions/theme.action";
import { setIsMetric } from "../../redux/actions/weather.action";

import { useAppHeaderConnector } from "./use-app-header-connector";

import * as Styles from "./app-header-component-styles";
import { showSuccessMsg } from "../../services/event-bus.service";
import { useEffect } from "react";

export default function AppHeaderComponent() {
  const { isDarkMode, isMetric } = useAppHeaderConnector();

  const toggleDarkMode = () => {
    setTheme(!isDarkMode);
    showSuccessMsg(`Switched to ${isDarkMode ? "Light" : "Dark"} mode!`);
  };

  const toggleMetric = () => {
    setIsMetric(!isMetric);
    showSuccessMsg(`Switched to ${isMetric ? "Imperial" : "Metric"} units!`);
  };

  useEffect(() => {
    const currentTime = new Date().getHours();
    const isNight = currentTime >= 17 || currentTime < 6;
    setTheme(isNight);
    showSuccessMsg(isDarkMode ? "Good Evening!" : "Good Morning!");
  }, []);

  return (
    <Styles.AppHeader>
      <Styles.AppHeaderWrapper>
        <Styles.TitleWrapper>
          <Styles.Title>The Weather Frog</Styles.Title>
          <Styles.Subtitle>your trusted weather forecaster </Styles.Subtitle>
        </Styles.TitleWrapper>
      </Styles.AppHeaderWrapper>

      <Styles.Nav>
        <Styles.NavLink to="/">Home</Styles.NavLink>
        <Styles.NavLink to="/fav">Favourites</Styles.NavLink>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleDarkMode} />}
          label={isDarkMode ? "🌒" : "☀️"}
          inputProps={{ "aria-label": "controlled" }}
        />
        <FormControlLabel
          control={<Switch checked={isMetric} onChange={toggleMetric} />}
          label={isMetric ? "C" : "F"}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Styles.Nav>
    </Styles.AppHeader>
  );
}
