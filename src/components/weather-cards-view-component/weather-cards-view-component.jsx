import { useEffect, useState } from "react";

import TitleComponent from "../title-component/title-component";
import WeatherCardViewComponent from "../weather-card-view-component/weather-card-view-component";
import FavouriteButtonComponent from "../favourite-button-component/favourite-button-component";

import useConnectCardsViewConnector from "./use-connect-cards-view-connector";

import { weatherService } from "../../services/weather.service";

import * as Styles from "./weather-cards-view-component-styles";
import { getFullWeather } from "../../redux/actions/weather.action";

export default function WeatherCardsViewComponent(props) {
  const { currentWeather, fullWeather } = props;

  const [isFavourite, setIsFavourite] = useState(false);

  const { currentCityName, currentCityKey, isMetric } = useConnectCardsViewConnector();

  const { LocalObservationDateTime: timestamp, WeatherText, WeatherIcon, Temperature } = currentWeather;

  useEffect(() => {
    getFullWeather({ cityKey: currentCityKey, metric: isMetric });
    setIsFavourite(weatherService.isCityInFavorites({ cityKey: currentCityKey }));
  }, [currentCityKey, isMetric]);

  const getSubtitle = () => {
    const isMetricText = isMetric ? "Metric" : "Imperial";
    return `${WeatherText} | ${Temperature[isMetricText].Value} ${Temperature[isMetricText].Unit}`;
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
          <Styles.Icon src={`/icons/${WeatherIcon}.png`} alt="Weather Icon" />
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
      return (
        <WeatherCardViewComponent
          key={index}
          day={day}
          isMetric={isMetric}
          temp={isMetric ? Temperature.Metric : Temperature.Imperial}
        />
      );
    });
  };

  return (
    <Styles.WeatherCardsViewWrapper>
      <Styles.CurrentDayCardWrapper>{renderCurrentDayCard()}</Styles.CurrentDayCardWrapper>
      <Styles.CardViewWrapper>{renderFullWeatherForecast()}</Styles.CardViewWrapper>
    </Styles.WeatherCardsViewWrapper>
  );
}
