import { useEffect } from "react";

import TitleComponent from "../title-component/title-component";

import useConnectCardsViewConnector from "./use-connect-cards-view-connector";

import { getWeekday } from "../../utils/utils";

import * as Styles from "./weather-cards-view-component-styles";
import FavouriteButtonComponent from "../favourite-button-component/favourite-button-component";

export default function WeatherCardsViewComponent(props) {
  const { currentWeather } = props;

  const { currentCity } = useConnectCardsViewConnector();
  console.log("currentCity:", currentCity);

  const { LocalObservationDateTime: timestamp, WeatherText, WeatherIcon, MobileLink, Link } = currentWeather;

  useEffect(() => {
    const currDay = getWeekday({ timestamp });
  });

  const getIconPath = () => {
    const iconUrl = `src/icons/${WeatherIcon}.png`;
    return iconUrl;
  };

  const renderCurrentDayCard = () => {
    return (
      <Styles.HeaderWrapper>
        <Styles.IconWrapper>
          <Styles.Icon src={getIconPath()} alt="Weather Icon" />
        </Styles.IconWrapper>
        <TitleComponent title={currentCity} size="5rem" />
        <Styles.FavouriteWrapper>
          <FavouriteButtonComponent />
        </Styles.FavouriteWrapper>
      </Styles.HeaderWrapper>
    );
  };

  return (
    <Styles.WeatherCardsViewWrapper>
      <Styles.CurrentDayCardWrapper>{renderCurrentDayCard()}</Styles.CurrentDayCardWrapper>
    </Styles.WeatherCardsViewWrapper>
  );
}
