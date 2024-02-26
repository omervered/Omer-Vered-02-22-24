import { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import * as Styles from "./favourite-button-component-styles";

export default function FavouriteButtonComponent(props) {
  const { onClick, isFavourite } = props;

  return (
    <Styles.FavouriteButtonWrapper onClick={onClick}>
      {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Styles.FavouriteButtonWrapper>
  );
}
