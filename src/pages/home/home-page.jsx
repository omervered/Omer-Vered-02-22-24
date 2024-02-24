import InputComponent from "../../components/input-component/input-component";
import TitleComponent from "../../components/title-component/title-component";

import * as Styles from "./home-page-styles";

export default function HomePage() {
  return (
    <Styles.HomePage>
      <InputComponent label={"City Name"} placeholder={"Start typing your desired location..."} />
      <Styles.HomePageContainer></Styles.HomePageContainer>
    </Styles.HomePage>
  );
}
