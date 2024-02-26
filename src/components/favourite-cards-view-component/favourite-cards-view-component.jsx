import { useEffect, useState } from "react";

import FavouriteCardViewComponent from "../favourite-card-view-component/favourite-card-view-component";

import { weatherService } from "../../services/weather.service";

export default function FavouriteCardsViewComponent(props) {
  const { favourites } = props;

  const [favouritesWeather, setFavouritesWeather] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherPromises = await favourites.map((cityKey) => weatherService.getWeather({ cityKey }));
        const weatherResults = await Promise.all(weatherPromises);

        setFavouritesWeather(weatherResults);
      } catch (error) {
        console.error("Error fetching weather data for favourites:", error);
      }
    };

    if (favourites && favourites.length > 0) {
      fetchWeatherData();
    }
  }, [favourites]);

  return (
    <div>
      {favouritesWeather.map((weather, index) => {
        return <FavouriteCardViewComponent key={index} weather={weather} />;
      })}
    </div>
  );
}
