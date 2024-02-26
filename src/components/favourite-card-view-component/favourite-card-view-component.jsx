import TitleComponent from "../title-component/title-component";
import * as Styles from "./favourite-card-view-component-styles";

export default function FavouriteCardViewComponent(props) {
  const { weather } = props;

  const { cityName } = weather;

  const { Temperature, WeatherText, WeatherIcon } = weather.data[0];

  return (
    <Styles.cardWrapper>
      <Styles.TitleWrapper>
        <TitleComponent title={cityName} titleSize={"2rem"} />
      </Styles.TitleWrapper>
      <Styles.InfoWrapper>
        <TitleComponent title={WeatherText} titleSize={"1rem"} />
        <Styles.IconWrapper>
          <Styles.Icon src={`src/icons/${WeatherIcon}.png`} />
        </Styles.IconWrapper>
        <TitleComponent title={`${Temperature.Metric.Value} C`} titleSize={"2.5rem"} />
      </Styles.InfoWrapper>
    </Styles.cardWrapper>
  );
}
