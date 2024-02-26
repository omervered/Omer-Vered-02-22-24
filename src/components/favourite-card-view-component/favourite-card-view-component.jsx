import TitleComponent from "../title-component/title-component";
import * as Styles from "./favourite-card-view-component-styles";
import { useFavouriteCardConnector } from "./use-favourite-card-connector";

export default function FavouriteCardViewComponent(props) {
  const { weather } = props;

  const { isMetric } = useFavouriteCardConnector();

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
          <Styles.Icon src={`../../icons/${WeatherIcon}.png`} />
        </Styles.IconWrapper>
        <TitleComponent
          title={
            isMetric
              ? `${Temperature.Metric.Value} °${Temperature.Metric.Unit}`
              : `${Temperature.Imperial.Value} °${Temperature.Imperial.Unit}`
          }
          titleSize={"2.5rem"}
        />
      </Styles.InfoWrapper>
    </Styles.cardWrapper>
  );
}
