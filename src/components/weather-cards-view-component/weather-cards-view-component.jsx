import { useEffect, useState } from "react";

import TitleComponent from "../title-component/title-component";

import useConnectCardsViewConnector from "./use-connect-cards-view-connector";

import { getWeekday } from "../../utils/utils";

import * as Styles from "./weather-cards-view-component-styles";
import FavouriteButtonComponent from "../favourite-button-component/favourite-button-component";
import WeatherCardViewComponent from "../weather-card-view-component/weather-card-view-component";

export default function WeatherCardsViewComponent(props) {
  const { currentWeather, fullWeather } = props;

  const [isFavourite, setIsFavourite] = useState(false);

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

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  };

  const renderCurrentDayCard = () => {
    return (
      <Styles.HeaderWrapper>
        <Styles.IconWrapper>
          <Styles.Icon src={getIconPath()} alt="Weather Icon" />
        </Styles.IconWrapper>
        <TitleComponent title={currentCity} titleSize="5rem" subtitle={getSubtitle()} />
        <Styles.FavouriteWrapper>
          <FavouriteButtonComponent onClick={handleFavouriteClick} isFavourite={isFavourite} />
        </Styles.FavouriteWrapper>
      </Styles.HeaderWrapper>
    );
  };

  const renderFullWeatherForecast = () => {
    return fullWeather.map((day, index) => {
      return <WeatherCardViewComponent key={index} day={day} />;
    });
  };

  return (
    <Styles.WeatherCardsViewWrapper>
      <Styles.CurrentDayCardWrapper>{renderCurrentDayCard()}</Styles.CurrentDayCardWrapper>
      <Styles.CardViewWrapper>{renderFullWeatherForecast()}</Styles.CardViewWrapper>
    </Styles.WeatherCardsViewWrapper>
  );
}
