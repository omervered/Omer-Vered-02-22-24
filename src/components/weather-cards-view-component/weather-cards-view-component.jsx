import { useEffect, useState } from "react";

import TitleComponent from "../title-component/title-component";
import WeatherCardViewComponent from "../weather-card-view-component/weather-card-view-component";
import FavouriteButtonComponent from "../favourite-button-component/favourite-button-component";

import useConnectCardsViewConnector from "./use-connect-cards-view-connector";

import { weatherService } from "../../services/weather.service";

import * as Styles from "./weather-cards-view-component-styles";

export default function WeatherCardsViewComponent(props) {
  const { currentWeather, fullWeather } = props;

  const [isFavourite, setIsFavourite] = useState(false);

  const { currentCityName, currentCityKey } = useConnectCardsViewConnector();

  const { LocalObservationDateTime: timestamp, WeatherText, WeatherIcon, Temperature } = currentWeather;

  useEffect(() => {
    setIsFavourite(weatherService.isCityInFavorites({ cityKey: currentCityKey }));
  }, [currentCityKey]);

  const getIconPath = () => {
    const iconUrl = `src/icons/${WeatherIcon}.png`;
    return iconUrl;
  };

  const getSubtitle = () => {
    return `${WeatherText}, ${Temperature.Metric.Value}°C`;
  };

  const handleIsFavouriteClick = () => {
    isFavourite
      ? weatherService.removeFromFavorites({ cityKey: currentCityKey })
      : weatherService.addToFavorites({ cityKey: currentCityKey, cityName: currentCityName });
    setIsFavourite(!isFavourite);
  };

  const renderCurrentDayCard = () => {
    return (
      <Styles.HeaderWrapper>
        <Styles.IconWrapper>
          <Styles.Icon src={getIconPath()} alt="Weather Icon" />
        </Styles.IconWrapper>
        <TitleComponent title={currentCityName} titleSize="5rem" subtitle={getSubtitle()} />
        <Styles.FavouriteWrapper>
          <FavouriteButtonComponent onClick={handleIsFavouriteClick} isFavourite={isFavourite} />
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
