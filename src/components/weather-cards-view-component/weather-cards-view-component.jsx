import { useEffect } from "react";

import TitleComponent from "../title-component/title-component";

import useConnectCardsViewConnector from "./use-connect-cards-view-connector";

import { getWeekday } from "../../utils/utils";

import * as Styles from "./weather-cards-view-component-styles";
import FavouriteButtonComponent from "../favourite-button-component/favourite-button-component";
import WeatherCardViewComponent from "../weather-card-view-component/weather-card-view-component";

export default function WeatherCardsViewComponent(props) {
  const { currentWeather } = props;

  const { currentCity } = useConnectCardsViewConnector();

  const {
    LocalObservationDateTime: timestamp,
    WeatherText,
    WeatherIcon,
    MobileLink,
    Link,
    Temperature,
  } = currentWeather;

  useEffect(() => {
    const currDay = getWeekday({ timestamp });
  });

  const getIconPath = () => {
    const iconUrl = `src/icons/${WeatherIcon}.png`;
    return iconUrl;
  };

  const getSubtitle = () => {
    return `${WeatherText}, ${Temperature.Metric.Value}°C`;
  };
  const renderCurrentDayCard = () => {
    return (
      <Styles.HeaderWrapper>
        <Styles.IconWrapper>
          <Styles.Icon src={getIconPath()} alt="Weather Icon" />
        </Styles.IconWrapper>
        <TitleComponent title={currentCity} titleSize="5rem" subtitle={getSubtitle()} />
        <Styles.FavouriteWrapper>
          <FavouriteButtonComponent />
        </Styles.FavouriteWrapper>
      </Styles.HeaderWrapper>
    );
  };

  return (
    <Styles.WeatherCardsViewWrapper>
      <Styles.CurrentDayCardWrapper>{renderCurrentDayCard()}</Styles.CurrentDayCardWrapper>
      <Styles.CardViewWrapper>
        <WeatherCardViewComponent />
      </Styles.CardViewWrapper>
    </Styles.WeatherCardsViewWrapper>
  );
}
