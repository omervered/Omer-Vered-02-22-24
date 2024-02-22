import FavouritePage from "./pages/favourite/favourite-page";
import HomePage from "./pages/home/home-page";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home ",
  },
  {
    path: "/fav",
    element: <FavouritePage />,
    label: "Favourite",
  },
];

export default routes;
