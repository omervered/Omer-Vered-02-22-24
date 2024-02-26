import { useEffect, useState } from "react";

import FavouriteCardViewComponent from "../favourite-card-view-component/favourite-card-view-component";

import { weatherService } from "../../services/weather.service";

import * as Styles from "./favourite-cards-view-component-styles";
import { CircularProgress } from "@mui/material";

export default function FavouriteCardsViewComponent(props) {
  const { favourites } = props;

  const [favouritesWeather, setFavouritesWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherPromises = favourites.map((favourite) => {
          return weatherService.getWeather({ cityKey: favourite.cityKey }).then((weatherResult) => {
            return {
              ...weatherResult,
              cityName: favourite.cityName,
            };
          });
        });

        const enrichedWeatherResults = await Promise.all(weatherPromises);
        setFavouritesWeather(enrichedWeatherResults);
      } catch (error) {
        console.error("Error fetching weather data for favourites:", error);
      }
    };

    if (favourites && favourites.length > 0) {
      fetchWeatherData();
    }
  }, [favourites]);

  const renderFavourites = () => {
    return favouritesWeather.map((weather, index) => {
      return (
        <Styles.FavouriteCardViewWrapper key={index}>
          <FavouriteCardViewComponent weather={weather} />
        </Styles.FavouriteCardViewWrapper>
      );
    });
  };

  return (
    <Styles.FavouriteCardsViewWrapper>
      {favouritesWeather ? renderFavourites() : <CircularProgress color="inherit" size={20} />}
    </Styles.FavouriteCardsViewWrapper>
  );
}
