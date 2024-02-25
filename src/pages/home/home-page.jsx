import { useSelector } from "react-redux";
import AutoCompleteComponent from "../../components/auto-complete/auto-complete-component";
import WeatherCardsViewComponent from "../../components/weather-cards-view-component/weather-cards-view-component";

import useConnectHomePageConnector from "./use-connect-home-page-connector";

import * as Styles from "./home-page-styles";

export default function HomePage() {
  const { currentWeather } = useConnectHomePageConnector();

  return (
    <Styles.HomePage>
      <AutoCompleteComponent label={"City Name"} placeholder={"Start typing your desired location..."} />
      <Styles.HomePageContainer>
        {currentWeather ? <WeatherCardsViewComponent currentWeather={currentWeather} /> : <div> loading...</div>}
      </Styles.HomePageContainer>
    </Styles.HomePage>
  );
}
