import { useEffect, useState } from "react";

import FavouriteCardsViewComponent from "../../components/favourite-cards-view-component/favourite-cards-view-component";

import { weatherService } from "../../services/weather.service";

export default function FavouritePage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(weatherService.loadFavorites());
  }, []);

  return (
    <div>
      <FavouriteCardsViewComponent favourites={favourites} />
    </div>
  );
}
