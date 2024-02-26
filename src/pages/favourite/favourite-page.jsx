import { useEffect, useState } from "react";

import FavouriteCardsViewComponent from "../../components/favourite-cards-view-component/favourite-cards-view-component";
import TitleComponent from "../../components/title-component/title-component";

import { weatherService } from "../../services/weather.service";

import * as Styles from "./favourite-page-styles";

export default function FavouritePage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(weatherService.loadFavorites());
  }, []);

  return (
    <Styles.FavouritePageViewWrapper>
      <TitleComponent title="Favourites" titleSize={"4rem"} />
      <FavouriteCardsViewComponent favourites={favourites} />
    </Styles.FavouritePageViewWrapper>
  );
}
