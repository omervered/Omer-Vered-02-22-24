import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import AutoCompleteComponent from "../../components/auto-complete/auto-complete-component";
import WeatherCardsViewComponent from "../../components/weather-cards-view-component/weather-cards-view-component";

import useConnectHomePageConnector from "./use-connect-home-page-connector";

import * as Styles from "./home-page-styles";
import { getGeolocation } from "../../redux/actions/weather.action";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { currentWeather, fullWeather } = useConnectHomePageConnector();

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <Styles.HomePage>
      <AutoCompleteComponent label={"City Name"} placeholder={"Start typing your desired location..."} />
      <Styles.HomePageContainer>
        {!(currentWeather && fullWeather) ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <WeatherCardsViewComponent currentWeather={currentWeather} fullWeather={fullWeather} />
        )}
      </Styles.HomePageContainer>
    </Styles.HomePage>
  );
}
