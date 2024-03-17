import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import AutoCompleteComponent from "../../components/auto-complete/auto-complete-component";
import WeatherCardsViewComponent from "../../components/weather-cards-view-component/weather-cards-view-component";

import useConnectHomePageConnector from "./use-connect-home-page-connector";
import { getGeolocation } from "../../redux/actions/weather.action";

import * as Styles from "./home-page-styles";

export default function HomePage() {
  const { currentWeather, fullWeather, isGeolocationAllowed } = useConnectHomePageConnector();

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <Styles.HomePage>
      <AutoCompleteComponent label={"City Name"} placeholder={"Start typing your desired location..."} />
      <Styles.HomePageContainer>
        {isGeolocationAllowed ? (
          !(currentWeather && fullWeather) ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <WeatherCardsViewComponent currentWeather={currentWeather} fullWeather={fullWeather} />
          )
        ) : (
          <>
            <Styles.NoGeolocationAllowed>Location Services is blocked</Styles.NoGeolocationAllowed>
            <Styles.NoGeolocationAllowedMessage>
              Please allow location services to see the weather in your area and refresh the page, otherwise you can
              start typing to search for a city
            </Styles.NoGeolocationAllowedMessage>
          </>
        )}
      </Styles.HomePageContainer>
    </Styles.HomePage>
  );
}
