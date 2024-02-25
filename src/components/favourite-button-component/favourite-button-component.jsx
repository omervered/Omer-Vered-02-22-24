import { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FavouriteButtonComponent(props) {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavourite(!isFavourite);
  };

  return <div onClick={handleToggleFavorite}>{isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}</div>;
}
