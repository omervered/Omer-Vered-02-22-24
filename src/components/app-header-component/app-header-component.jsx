import * as Styles from "./app-header-component-styles";
import WeatherImageComponent from "../../images/weather-header-image.png";
import { NavLink } from "react-router-dom";

export default function AppHeaderComponent() {
  return (
    <Styles.AppHeader>
      <Styles.AppHeaderWrapper>
        <Styles.Image src={WeatherImageComponent} alt="Weather App" />
        <Styles.TitleWrapper>
          <Styles.Title>The Weather Frog</Styles.Title>
          <Styles.Subtitle>your trusted weather forecaster </Styles.Subtitle>
        </Styles.TitleWrapper>
      </Styles.AppHeaderWrapper>
      <Styles.Nav>
        <Styles.NavLink to="/">Home</Styles.NavLink>
        <Styles.NavLink to="/fav">Favourites</Styles.NavLink>
      </Styles.Nav>
    </Styles.AppHeader>
  );
}
